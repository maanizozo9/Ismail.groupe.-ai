import type { NextApiRequest, NextApiResponse } from 'next'
import { createHmac, timingSafeEqual } from 'crypto'

export const config = {
  api: {
    bodyParser: false,
  },
}

const MAX_TIMESTAMP_AGE_SECONDS = 5 * 60

function readRawBody(req: NextApiRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer | string) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function verifyWhopSignature(rawBody: string, req: NextApiRequest) {
  const secret = process.env.WHOP_WEBHOOK_SECRET
  const webhookId = req.headers['webhook-id']
  const timestamp = req.headers['webhook-timestamp']
  const signature = req.headers['webhook-signature']

  if (!secret || typeof webhookId !== 'string' || typeof timestamp !== 'string' || typeof signature !== 'string') return false

  const timestampSeconds = Number(timestamp)
  if (!Number.isFinite(timestampSeconds) || Math.abs(Date.now() / 1000 - timestampSeconds) > MAX_TIMESTAMP_AGE_SECONDS) return false

  const secretBytes = secret.startsWith('whsec_') ? secret.slice(6) : secret
  const signedPayload = `${webhookId}.${timestamp}.${rawBody}`
  const expected = createHmac('sha256', Buffer.from(secretBytes, 'base64')).update(signedPayload).digest('base64')

  return signature.split(' ').some((value) => {
    const [version, encoded] = value.split(',')
    if (version !== 'v1' || !encoded) return false
    const expectedBuffer = Buffer.from(expected)
    const receivedBuffer = Buffer.from(encoded)
    return expectedBuffer.length === receivedBuffer.length && timingSafeEqual(expectedBuffer, receivedBuffer)
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const rawBody = await readRawBody(req)
    if (!verifyWhopSignature(rawBody, req)) return res.status(401).json({ error: 'Invalid webhook signature' })

    const event = JSON.parse(rawBody) as { id?: string; type?: string }
    console.info('[whop-webhook]', { id: event.id ?? null, type: event.type ?? 'unknown' })

    return res.status(200).json({ received: true })
  } catch (error) {
    console.error('[whop-webhook] rejected request', error)
    return res.status(400).json({ error: 'Invalid webhook payload' })
  }
}
