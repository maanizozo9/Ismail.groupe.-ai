import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About — Ismail Group AI</title>
        <meta name="description" content="Learn about Ismail Group AI and our mission to provide quality digital products." />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 lg:px-20 py-16 flex-1">
          <h1 className="text-4xl font-semibold mb-8">About Ismail Group AI</h1>
          
          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg text-gray-700 mb-6">
              Ismail Group AI creates high-quality digital products and AI resources for creators, entrepreneurs, and developers worldwide.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to provide practical, accessible tools that save time and increase creativity. We believe that quality digital products should be affordable and available to everyone, regardless of location or background.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✓ AI tools and prompts curated for professionals</li>
              <li>✓ Design templates for marketing and social media</li>
              <li>✓ Educational guides and tutorials</li>
              <li>✓ Resources for entrepreneurs and creators</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 mb-6">
              We are committed to quality, affordability, and customer satisfaction. Every product is carefully curated and tested. We provide support in Arabic and English to serve our global audience.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
