import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Ismail Group AI</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 lg:px-20 py-16 flex-1 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg space-y-6 text-gray-700">
            <p>
              <strong>Last updated:</strong> June 2024
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Ismail Group AI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we collect on the Site may include:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal data (name, email address) provided through contact forms</li>
                <li>Information from third-party payment processors (Payhip)</li>
                <li>Automatically collected data (IP address, browser type, pages visited)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Use of Your Information</h2>
              <p>
                We use the information we collect for purposes including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Processing transactions and sending related information</li>
                <li>Responding to your inquiries and customer service requests</li>
                <li>Improving our website and services</li>
                <li>Sending marketing communications (with your consent)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at support@ismailgroupai.com
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
