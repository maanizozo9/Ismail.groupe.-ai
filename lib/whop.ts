import 'server-only'

const WHOP_API_BASE = 'https://api.whop.com/api/v1'
const WHOP_COMPANY_ID = 'biz_RIMgMdqgwRFaAN'

type WhopResponse<T> = { data: T; pagination?: { next_page?: string | null } }

export type WhopProduct = { id: string; name?: string; title?: string; status?: string; price?: number; created_at?: string }
export type WhopSnapshot = {
  connected: boolean
  products: WhopProduct[]
  members: number | null
  memberships: number | null
  payments: number | null
  community: { posts: number | null; activeMembers: number | null }
  syncedAt: string
  error?: string
}

function getKey() {
  const key = process.env.WHOP_API_KEY
  if (!key) throw new Error('WHOP_API_KEY is not configured on the server.')
  return key
}

async function whopFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const key = getKey()
  const separator = path.includes('?') ? '&' : '?'
  const scopedPath = `${path}${separator}company_id=${encodeURIComponent(WHOP_COMPANY_ID)}`
  let lastError = 'Whop API request failed.'
  for (let attempt = 0; attempt < 3; attempt++) {
    const response = await fetch(`${WHOP_API_BASE}${scopedPath}`, {
      ...init,
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', ...init?.headers },
      cache: 'no-store',
      signal: AbortSignal.timeout(12000),
    })
    if (response.ok) return response.json() as Promise<T>
    if (response.status === 429) {
      await new Promise((resolve) => setTimeout(resolve, 400 * 2 ** attempt))
      continue
    }
    const body = await response.text()
    lastError = `Whop API returned ${response.status}: ${body.slice(0, 160)}`
    break
  }
  throw new Error(lastError)
}

async function list<T>(path: string) {
  const result = await whopFetch<WhopResponse<T[]>>(path)
  return result.data ?? []
}

export async function getWhopSnapshot(): Promise<WhopSnapshot> {
  const syncedAt = new Date().toISOString()
  try {
    const products = await list<WhopProduct>('/products')
    const [members, memberships, payments] = await Promise.allSettled([
      list('/members'),
      list('/memberships'),
      list('/payments'),
    ])
    return {
      connected: true,
      products,
      members: members.status === 'fulfilled' ? members.value.length : null,
      memberships: memberships.status === 'fulfilled' ? memberships.value.length : null,
      payments: payments.status === 'fulfilled' ? payments.value.length : null,
      community: { posts: null, activeMembers: null },
      syncedAt,
    }
  } catch (error) {
    return { connected: false, products: [], members: null, memberships: null, payments: null, community: { posts: null, activeMembers: null }, syncedAt, error: error instanceof Error ? error.message : 'Unable to connect to Whop.' }
  }
}

export async function createWhopProduct(input: { name: string; description?: string }) {
  return whopFetch<WhopProduct>('/products', { method: 'POST', body: JSON.stringify(input) })
}

export async function updateWhopProduct(id: string, input: Record<string, unknown>) {
  if (!id || id.includes('/')) throw new Error('Invalid product id.')
  return whopFetch<WhopProduct>(`/products/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify(input) })
}

export async function auditEvent(event: { action: string; target?: string; status: string; metadata?: Record<string, unknown> }) {
  // Keep the provider-neutral audit boundary ready for durable storage integration.
  return { ...event, id: crypto.randomUUID(), createdAt: new Date().toISOString() }
}

export type BusinessDataProvider = { getSnapshot: () => Promise<WhopSnapshot> }
export type ContentChannelProvider = { publish: (content: string) => Promise<{ id: string }> }
export const whopProvider: BusinessDataProvider = { getSnapshot: getWhopSnapshot }
export const futureChannels: Record<string, ContentChannelProvider | undefined> = { pinterest: undefined, tiktok: undefined, youtube: undefined }
