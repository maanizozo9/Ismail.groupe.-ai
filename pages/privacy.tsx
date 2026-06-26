import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  const siteUrl = 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app'

  return (
    <>
      <Head>
        <title>Privacy Policy | Ismail Group AI</title>
        <meta name="description" content="Privacy Policy for Ismail Group AI" />
        <link rel="canonical" href={`${siteUrl}/privacy`} />
        <meta property="og:title" content="Privacy Policy | Ismail Group AI" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white py-16">
            <div className="container mx-auto px-6 lg:px-20">
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-16 max-w-3xl">
            <div className="prose prose-lg">
              <h2>1. Introduction</h2>
              <p>Ismail Group AI respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul>
                <li>Personal Data: name, email address, phone number</li>
                <li>Usage Data: pages visited, time spent, click data</li>
              </ul>

              <h2>3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.</p>

              <h2>4. Disclosure of Your Information</h2>
              <p>We do not sell, trade, or rent users' personal identification information to others.</p>

              <h2>5. Security of Your Information</h2>
              <p>We use administrative, technical, and physical security measures to protect your personal information.</p>

              <h2>6. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at support@ismailgroupai.com</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
