import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PRODUCTS = [
  {
    id: 'ai-toolkit',
    title: 'AI Toolkit — Starter Pack',
    desc: 'Prompts, templates and resources for AI projects.',
    icon: '🤖',
    link: 'https://payhip.com/IsmailgroupAI'
  },
  {
    id: 'templates-bundle',
    title: 'Design Templates Bundle',
    desc: 'Editable design templates for social, banners, and ads.',
    icon: '🎨',
    link: 'https://payhip.com/IsmailgroupAI'
  },
  {
    id: 'seo-guide',
    title: 'SEO Mastery Guide',
    desc: 'Complete guide to dominating search results.',
    icon: '📈',
    link: 'https://payhip.com/IsmailgroupAI'
  },
  {
    id: 'content-pack',
    title: 'Content Creator Pack',
    desc: 'Tools and templates for content creators.',
    icon: '✍️',
    link: 'https://payhip.com/IsmailgroupAI'
  }
]

export default function Products() {
  const store = 'https://payhip.com/IsmailgroupAI'
  return (
    <>
      <Head>
        <title>Products — Ismail Group AI</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 lg:px-20 py-16 flex-1">
          <h1 className="text-4xl font-semibold mb-4">Our Products</h1>
          <p className="text-gray-600 text-lg mb-8">All products are available on our Payhip store with secure checkout and instant downloads.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {PRODUCTS.map(p => (
              <div key={p.id} className="p-6 border rounded-lg hover:shadow-lg transition flex flex-col">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h2 className="font-semibold text-lg">{p.title}</h2>
                <p className="mt-2 text-sm text-gray-600 flex-1">{p.desc}</p>
                <div className="mt-4">
                  <a href={p.link} target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">View / Buy</a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-sky-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Browse All Products</h2>
            <p className="text-gray-600 mb-6">Visit our complete Payhip store to see all available products and exclusive offers.</p>
            <a href={store} target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition inline-block">Go to Payhip Store →</a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
