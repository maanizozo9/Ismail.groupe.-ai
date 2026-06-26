import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const payhip = 'https://payhip.com/IsmailgroupAI'
  const siteUrl = 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app'

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ismail Group AI',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'High-quality digital products and AI tools',
    sameAs: [payhip],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@ismailgroupai.com',
    },
  }

  return (
    <>
      <Head>
        <title>Ismail Group AI — Premium Digital Products & AI Tools</title>
        <meta name="description" content="High-quality digital products and AI tools by Ismail Group. Premium templates, prompts, and resources available on Payhip." />
        <meta name="keywords" content="AI tools, digital products, templates, prompts, Payhip, digital assets" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ismail Group AI — Premium Digital Products & AI Tools" />
        <meta property="og:description" content="High-quality digital products and AI tools by Ismail Group. Buy with instant access on Payhip." />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Ismail Group AI" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ismail Group AI — Premium Digital Products & AI Tools" />
        <meta name="twitter:description" content="High-quality digital products and AI tools by Ismail Group" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Ismail Group" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white py-24">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Ismail Group AI</h1>
                <p className="mt-6 text-lg max-w-xl">High-quality digital products and AI tools to boost productivity and creativity. Ready to download on Payhip.</p>

                <div className="mt-8 flex gap-4 flex-wrap">
                  <a href={payhip} target="_blank" rel="noreferrer" className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md shadow hover:opacity-95 transition">Visit our Payhip Store</a>
                  <Link href="/products" className="border border-white text-white px-6 py-3 rounded-md hover:opacity-90 transition">View Products</Link>
                </div>

                <p className="mt-6 text-sm opacity-90">✓ Global audience • Arabic & English support</p>
              </div>

              <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                <div className="w-full max-w-md bg-white/10 rounded-xl p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" className="w-full h-auto rounded" alt="Digital Products Hero">
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0" stopColor="#7c3aed" />
                        <stop offset="1" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#g)" />
                    <g fill="white" opacity="0.9">
                      <rect x="80" y="120" width="440" height="560" rx="24" fill="#ffffff22" />
                      <rect x="700" y="140" width="360" height="200" rx="14" fill="#ffffff33" />
                      <rect x="700" y="380" width="360" height="200" rx="14" fill="#ffffff33" />
                    </g>
                    <text x="120" y="80" fill="white" fontSize="40" fontFamily="Arial">Digital Products</text>
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-16">
            <h2 className="text-3xl font-semibold">Why choose our products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-3" aria-label="Premium Quality">🎯</div>
                <h3 className="font-semibold text-lg">Premium Quality</h3>
                <p className="mt-2 text-sm text-gray-600">Professionally designed digital assets and AI tools crafted for excellence.</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-3" aria-label="Easy to Use">⚡</div>
                <h3 className="font-semibold text-lg">Easy to Use</h3>
                <p className="mt-2 text-sm text-gray-600">Clear instructions and instant downloads. Get started in minutes.</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-3" aria-label="Global Support">🌍</div>
                <h3 className="font-semibold text-lg">Global Support</h3>
                <p className="mt-2 text-sm text-gray-600">Support in Arabic and English. Serving customers worldwide.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-20">
              <h2 className="text-3xl font-semibold mb-8">Featured Product</h2>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow">
                <div className="md:w-1/3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" className="w-full h-auto rounded" alt="AI Toolkit Product">
                    <rect width="100%" height="100%" rx="12" fill="#f8fafc" stroke="#e6eef8" strokeWidth="2" />
                    <rect x="20" y="20" width="160" height="120" rx="8" fill="#eef2ff" />
                    <rect x="200" y="20" width="360" height="120" rx="8" fill="#dbeafe" />
                    <text x="30" y="170" fill="#0f172a" fontSize="18" fontWeight="bold">AI Toolkit</text>
                    <text x="30" y="200" fill="#475569" fontSize="14">Prompts, templates & resources</text>
                  </svg>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold">AI Toolkit — Starter Pack</h3>
                  <p className="mt-3 text-gray-600">A curated set of powerful prompts, templates and tools to accelerate your AI projects. Perfect for entrepreneurs, developers and creators.</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>✓ 50+ AI prompts</li>
                    <li>✓ Design templates</li>
                    <li>✓ Video tutorials</li>
                    <li>✓ Lifetime updates</li>
                  </ul>
                  <div className="mt-6">
                    <a href={payhip} target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition">Buy on Payhip</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-16">
            <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-block w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <h3 className="mt-4 font-semibold">Browse & Choose</h3>
                <p className="mt-2 text-sm text-gray-600">Visit our Payhip store and explore our products.</p>
              </div>
              <div className="text-center">
                <div className="inline-block w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <h3 className="mt-4 font-semibold">Purchase</h3>
                <p className="mt-2 text-sm text-gray-600">Secure checkout with multiple payment options.</p>
              </div>
              <div className="text-center">
                <div className="inline-block w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <h3 className="mt-4 font-semibold">Download & Use</h3>
                <p className="mt-2 text-sm text-gray-600">Get instant access to all your digital products.</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
