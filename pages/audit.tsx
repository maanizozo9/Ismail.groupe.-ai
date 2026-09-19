import Head from 'next/head'
import { FormEvent, useState } from 'react'

type Check = {
  name: string
  status: 'pass' | 'warn' | 'fail'
  detail: string
}

type AuditResult = {
  url: string
  score: number
  checks: Check[]
  note: string
}

const BUY_URL = 'https://izo-king.myshopify.com/products/shopify-store-revenue-leak-audit-24-hour-action-report'

export default function AuditPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AuditResult | null>(null)
  const [error, setError] = useState('')

  async function runAudit(event: FormEvent) {
    event.preventDefault()
    setError('')
    setResult(null)
    setLoading(true)
    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Audit failed')
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Audit failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Free Shopify Store Audit — Find Revenue Leaks | Ismail Group</title>
        <meta name="description" content="Run a free storefront audit for Shopify and see the most important conversion, SEO, trust and technical issues before spending more on traffic." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://ismail-groupe-fq8ooye07-ismail-group.vercel.app/audit" />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-5 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">Ismail Group</a>
            <a href={BUY_URL} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200">Get the 24-Hour Report — $49</a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">Free Shopify Store Audit</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">Find the leaks before you buy more traffic.</h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">Enter a public Shopify storefront URL. The scanner checks the page for practical conversion, SEO, trust and technical signals — then shows where to look first.</p>
          </div>

          <form onSubmit={runAudit} className="mt-10 max-w-3xl">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourstore.com"
                type="url"
                required
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />
              <button disabled={loading} className="rounded-2xl bg-cyan-300 px-6 py-4 font-bold text-slate-950 disabled:opacity-50">
                {loading ? 'Scanning…' : 'Run Free Audit'}
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">No login required. The scanner only requests the public storefront page.</p>
          </form>

          {error && (
            <div className="mt-6 max-w-3xl rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-red-200">{error}</div>
          )}

          {result && (
            <section className="mt-10 grid gap-6 lg:grid-cols-[220px_1fr] max-w-5xl">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
                <div className="text-sm text-slate-400">Store score</div>
                <div className="mt-2 text-6xl font-bold">{result.score}</div>
                <div className="mt-1 text-slate-400">/ 100</div>
                <a href={BUY_URL} className="mt-6 block rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950">Get the full report — $49</a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7">
                <div className="mb-5">
                  <div className="text-sm text-slate-400">Scanned</div>
                  <div className="mt-1 break-all font-medium">{result.url}</div>
                </div>
                <div className="space-y-3">
                  {result.checks.map((check) => (
                    <div key={check.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-semibold">{check.name}</div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          check.status === 'pass' ? 'bg-emerald-400/15 text-emerald-300' :
                          check.status === 'warn' ? 'bg-amber-400/15 text-amber-300' :
                          'bg-red-400/15 text-red-300'
                        }`}>
                          {check.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">{check.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-400">{result.note}</p>
              </div>
            </section>
          )}

          <section className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ['Conversion friction', 'Hero clarity, CTA presence, product evidence and buying signals.'],
              ['SEO foundations', 'Title, description, canonical, headings and structured data signals.'],
              ['Trust & technical', 'HTTPS, viewport, policy/support signals and social preview metadata.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-slate-400">{body}</p>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  )
}
