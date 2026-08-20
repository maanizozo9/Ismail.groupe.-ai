import type { NextApiRequest, NextApiResponse } from 'next'
import { getMembers, getPayments, getProducts, WhopError } from '../../../lib/whop'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const resource = req.query.resource
    const data = resource === 'products' ? await getProducts() : resource === 'members' ? await getMembers() : resource === 'payments' ? await getPayments() : null
    if (!data) return res.status(404).json({ error: 'Unknown resource' })
    return res.status(200).json(data)
  } catch (error) {
    const status = error instanceof WhopError ? error.status : 502
    return res.status(status).json({ error: error instanceof Error ? error.message : 'Unable to load Whop data' })
  }
}
