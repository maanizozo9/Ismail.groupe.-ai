import { NextResponse } from 'next/server'
import { generateText, tool } from 'ai'
import { z } from 'zod'
import { getWhopSnapshot } from '@/lib/whop'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const prompt = typeof body?.prompt === 'string' ? body.prompt.trim().slice(0, 4000) : ''
  if (!prompt) return NextResponse.json({ error: 'A prompt is required.' }, { status: 400 })
  try {
    const result = await generateText({
      model: 'openai/gpt-4o-mini',
      system: 'You are Ismail Group Business Agent. Focus on education, community growth, retention, support quality, and sustainable audience growth. Never delete products, charge customers, access financial credentials, or perform financial account actions. Explain when approval is required. Use the Whop snapshot tool before making business claims.',
      prompt,
      tools: {
        get_business_snapshot: tool({ description: 'Read current Whop products, membership, member, and payment counts.', inputSchema: z.object({}), execute: async () => getWhopSnapshot() }),
      },
      stopWhen: ({ steps }) => steps.length >= 3,
    })
    return NextResponse.json({ text: result.text, steps: result.steps.length })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Agent unavailable.' }, { status: 503 })
  }
}
