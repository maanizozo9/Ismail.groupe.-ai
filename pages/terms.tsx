import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  const siteUrl = 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app'

  return (
    <>
      <Head>
        <title>Terms of Service | Ismail Group AI</title>
        <meta name="description" content="Terms of Service for Ismail Group AI" />
        <link rel="canonical" href={`${siteUrl}/terms`} />
        <meta property="og:title" content="Terms of Service | Ismail Group AI" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white py-16">
            <div className="container mx-auto px-6 lg:px-20">
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-16 max-w-3xl">
            <div className="prose prose-lg">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

              <h2>2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Ismail Group AI's website for personal, non-commercial transitory viewing only.</p>

              <h2>3. Disclaimer</h2>
              <p>The materials on Ismail Group AI's website are provided on an 'as is' basis. Ismail Group AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <h2>4. Limitations</h2>
              <p>In no event shall Ismail Group AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ismail Group AI's website.</p>

              <h2>5. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at support@ismailgroupai.com</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
