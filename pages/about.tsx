import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  const siteUrl = 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app'

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Ismail Group AI',
    url: `${siteUrl}/about`,
  }

  return (
    <>
      <Head>
        <title>About | Ismail Group AI</title>
        <meta name="description" content="Learn about Ismail Group AI — creating premium digital products and AI tools for entrepreneurs, developers, and creators worldwide." />
        <meta name="keywords" content="about, Ismail Group, AI tools, digital products" />
        <link rel="canonical" href={`${siteUrl}/about`} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About | Ismail Group AI" />
        <meta property="og:url" content={`${siteUrl}/about`} />
        
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
              <h1 className="text-4xl lg:text-5xl font-bold">About Ismail Group AI</h1>
              <p className="mt-4 text-lg">Creating premium digital products for the modern creator</p>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">At Ismail Group AI, we believe in empowering entrepreneurs, developers, and creators with high-quality tools and resources. Our digital products are designed to save time, boost productivity, and unleash creativity.</p>
                <p className="text-gray-600 mb-4">We focus on creating practical, easy-to-use solutions that deliver real value to our global audience.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-sky-100 p-12 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" className="w-full h-auto">
                  <rect width="100%" height="100%" fill="#f3f4f6" />
                  <circle cx="200" cy="150" r="80" fill="#4f46e5" opacity="0.2" />
                  <circle cx="200" cy="150" r="60" fill="#0ea5e9" opacity="0.3" />
                  <text x="200" y="160" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#4f46e5">AI</text>
                </svg>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-20">
              <h2 className="text-3xl font-semibold mb-12 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                  <p className="text-gray-600">Every product is crafted with meticulous attention to detail and tested thoroughly.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
                  <p className="text-gray-600">Your success is our success. We listen to feedback and continuously improve.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-gray-600">We stay ahead of trends and bring cutting-edge AI tools to our community.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
