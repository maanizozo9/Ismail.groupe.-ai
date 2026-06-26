import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Ismail Group AI</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 lg:px-20 py-16 flex-1 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg space-y-6 text-gray-700">
            <p>
              <strong>Last updated:</strong> June 2024
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by and comply with these terms and conditions.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Digital Products</h2>
              <p>
                All digital products sold through our website and Payhip store are non-refundable unless stated otherwise. By purchasing a digital product, you agree to the terms of use for that product.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall Ismail Group AI be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at support@ismailgroupai.com
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
