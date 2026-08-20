import { NextResponse } from 'next/server'
import { getWhopSnapshot } from '@/lib/whop'

export async function GET() {
  const snapshot = await getWhopSnapshot()
  return NextResponse.json(snapshot, { status: snapshot.connected ? 200 : 503 })
}
