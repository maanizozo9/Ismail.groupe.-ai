import type { NextApiRequest, NextApiResponse } from 'next'

type Check = {
  name: string
  status: 'pass' | 'warn' | 'fail'
  detail: string
}

function normalizeUrl(input: string) {
  const value = input.trim()
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`
  const parsed = new URL(withProtocol)
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') throw new Error('Only public HTTP/HTTPS URLs are supported.')
  if (parsed.username || parsed.password) throw new Error('Credentials in URLs are not supported.')
  return parsed.toString()
}

function countMatches(text: string, pattern: RegExp) {
  return (text.match(pattern) || []).length
}

function has(text: string, pattern: RegExp) {
  return pattern.test(text)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const url = normalizeUrl(String(req.body?.url || ''))
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 9000)

    let html = ''
    let response: Response
    try {
      response = await fetch(url, {
        signal: controller.signal,
        headers: { 'User-Agent': 'Ismail-Group-Store-Audit/1.0' },
        redirect: 'follow',
      })
      html = (await response.text()).slice(0, 1500000)
    } finally {
      clearTimeout(timeout)
    }

    const checks: Check[] = []
    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim()
    const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] || ''
    const viewport = has(html, /<meta[^>]+name=["']viewport["']/i)
    const canonical = has(html, /<link[^>]+rel=["'][^"']*canonical/i)
    const h1Count = countMatches(html, /<h1\b/gi)
    const schemaCount = countMatches(html, /application\/ld\+json/gi)
    const ogTitle = has(html, /property=["']og:title["']/i)
    const ogImage = has(html, /property=["']og:image["']/i)
    const money = has(html, /\$\s?\d|USD|EUR|GBP|price|add to cart|buy now/i)
    const cta = has(html, /add to cart|buy now|shop now|get started|subscribe|checkout/i)
    const productSignal = has(html, /product|shopify\/products|collection/i)
    const support = has(html, /contact|support|help@|mailto:/i)
    const policy = has(html, /privacy|terms|refund|returns|shipping/i)

    if (response.status >= 200 && response.status < 400) checks.push({name:'Page reachable',status:'pass',detail:`HTTP ${response.status} response received.`})
    else checks.push({name:'Page reachable',status:'fail',detail:`The storefront returned HTTP ${response.status}.`})

    if (title.length >= 20 && title.length <= 65) checks.push({name:'SEO title',status:'pass',detail:'A usable title tag is present.'})
    else if (title) checks.push({name:'SEO title',status:'warn',detail:`Title is present but is ${title.length} characters; review its length and specificity.`})
    else checks.push({name:'SEO title',status:'fail',detail:'No title tag was detected.'})

    if (description.length >= 70 && description.length <= 170) checks.push({name:'Meta description',status:'pass',detail:'A descriptive meta description is present.'})
    else if (description) checks.push({name:'Meta description',status:'warn',detail:`A description exists but is ${description.length} characters.`})
    else checks.push({name:'Meta description',status:'fail',detail:'No meta description was detected.'})

    checks.push(viewport
      ? {name:'Mobile viewport',status:'pass',detail:'Responsive viewport metadata is present.'}
      : {name:'Mobile viewport',status:'fail',detail:'No viewport meta tag was detected.'})

    checks.push(canonical
      ? {name:'Canonical URL',status:'pass',detail:'A canonical link was detected.'}
      : {name:'Canonical URL',status:'warn',detail:'No canonical link was detected on the scanned page.'})

    checks.push(h1Count === 1
      ? {name:'Primary heading',status:'pass',detail:'Exactly one H1 was detected.'}
      : h1Count > 1
        ? {name:'Primary heading',status:'warn',detail:`${h1Count} H1 elements were detected.`}
        : {name:'Primary heading',status:'fail',detail:'No H1 element was detected.'})

    checks.push(schemaCount > 0
      ? {name:'Structured data',status:'pass',detail:`${schemaCount} JSON-LD block(s) were detected.`}
      : {name:'Structured data',status:'warn',detail:'No JSON-LD structured data block was detected.'})

    checks.push(ogTitle && ogImage
      ? {name:'Social previews',status:'pass',detail:'Open Graph title and image metadata are present.'}
      : {name:'Social previews',status:'warn',detail:'Social preview metadata is incomplete.'})

    checks.push(productSignal && money
      ? {name:'Commerce signals',status:'pass',detail:'Product/commerce and price-related signals were detected.'}
      : {name:'Commerce signals',status:'warn',detail:'The scanner could not confidently detect both product and price signals.'})

    checks.push(cta
      ? {name:'Primary CTA',status:'pass',detail:'A purchase or action CTA was detected.'}
      : {name:'Primary CTA',status:'fail',detail:'No obvious purchase or action CTA was detected.'})

    checks.push(support
      ? {name:'Contact/support',status:'pass',detail:'A contact or support signal was detected.'}
      : {name:'Contact/support',status:'warn',detail:'No obvious contact/support signal was detected on the scanned page.'})

    checks.push(policy
      ? {name:'Policy/trust links',status:'pass',detail:'Privacy, terms, refund/returns or shipping language was detected.'}
      : {name:'Policy/trust links',status:'warn',detail:'No obvious policy/trust link signals were detected on the scanned page.'})

    const passed = checks.filter(c => c.status === 'pass').length
    const score = Math.round((passed / checks.length) * 100)
    const note = 'This free scan is intentionally lightweight. The paid 24-hour report adds a deeper storefront review, evidence, prioritization and a practical fix roadmap.'

    return res.status(200).json({ url, score, checks, note })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to scan this URL.'
    if (/abort/i.test(message)) return res.status(504).json({ error: 'The storefront took too long to respond. Try again with the main homepage URL.' })
    return res.status(400).json({ error: message || 'Unable to scan this URL.' })
  }
}
