import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const signature = request.headers.get('whop-signature') ?? request.headers.get('x-whop-signature')
  const secret = process.env.WHOP_WEBHOOK_SECRET
  if (!secret || !signature) return NextResponse.json({ error: 'Webhook verification is not configured.' }, { status: 401 })
  const raw = await request.text()
  // Verify Whop's signed payload here once WHOP_WEBHOOK_SECRET is provisioned.
  // No event is accepted without a signature; replay/idempotency persistence belongs in the durable event store.
  if (!raw) return NextResponse.json({ error: 'Empty webhook payload.' }, { status: 400 })
  return NextResponse.json({ received: true, eventType: 'pending-verification' })
}
