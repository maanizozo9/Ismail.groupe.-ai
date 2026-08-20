const API_VERSION = '2024-09-11'
const baseUrl = process.env.WHOP_API_BASE_URL || 'https://api.whop.com/api/v1'

export class WhopError extends Error {
  status: number
  constructor(message: string, status: number) { super(message); this.name = 'WhopError'; this.status = status }
}

export async function whop<T>(path: string, init: RequestInit = {}): Promise<T> {
  const key = process.env.WHOP_API_KEY
  if (!key) throw new WhopError('Whop API is not configured.', 503)
  let lastError: unknown
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(`${baseUrl}${path}`, { ...init, headers: { Authorization: `Bearer ${key}`, 'Api-Version-Date': API_VERSION, 'Content-Type': 'application/json', ...(init.headers || {}) } })
      if (response.ok) return response.status === 204 ? (undefined as T) : await response.json()
      const retryable = response.status === 429 || response.status >= 500
      const body = await response.text()
      if (!retryable) throw new WhopError(`Whop request failed (${response.status}).`, response.status)
      lastError = new WhopError(`Whop request failed (${response.status}): ${body.slice(0, 200)}`, response.status)
    } catch (error) { lastError = error; if (error instanceof WhopError && error.status < 500 && error.status !== 429) throw error }
    await new Promise(resolve => setTimeout(resolve, 250 * 2 ** attempt))
  }
  throw lastError instanceof Error ? lastError : new WhopError('Whop request failed.', 502)
}

export const getProducts = () => whop<{ data: unknown[] }>('/products')
export const getMembers = () => whop<{ data: unknown[] }>('/memberships')
export const getPayments = () => whop<{ data: unknown[] }>('/payments')
