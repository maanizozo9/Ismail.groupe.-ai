import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Products() {
  const siteUrl = 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app'
  const payhip = 'https://payhip.com/IsmailgroupAI'

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Products',
    url: `${siteUrl}/products`,
  }

  return (
    <>
      <Head>
        <title>Products | Ismail Group AI</title>
        <meta name="description" content="Explore our premium digital products and AI tools. Templates, prompts, and resources for entrepreneurs and creators." />
        <meta name="keywords" content="digital products, AI tools, templates, prompts, Payhip store" />
        <link rel="canonical" href={`${siteUrl}/products`} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Products | Ismail Group AI" />
        <meta property="og:url" content={`${siteUrl}/products`} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products | Ismail Group AI" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white py-16">
            <div className="container mx-auto px-6 lg:px-20">
              <h1 className="text-4xl lg:text-5xl font-bold">Our Products</h1>
              <p className="mt-4 text-lg max-w-2xl">Premium digital products and AI tools designed to boost your productivity</p>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gradient-to-r from-indigo-400 to-sky-400 h-48 flex items-center justify-center">
                    <span className="text-4xl">📦</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">Product {item}</h3>
                    <p className="mt-2 text-gray-600">Premium digital product with templates, prompts and resources to accelerate your work.</p>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-3xl font-bold">$29</span>
                      <span className="text-gray-500 line-through">$49</span>
                    </div>
                    <a href={payhip} target="_blank" rel="noreferrer" className="mt-6 block w-full bg-indigo-600 text-white py-2 rounded-md text-center font-semibold hover:bg-indigo-700 transition">Buy Now</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-20 text-center">
              <h2 className="text-3xl font-semibold mb-4">Need Help Choosing?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">Contact us for personalized recommendations based on your specific needs.</p>
              <Link href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition">Get in Touch</Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
