import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Head>
        <title>Contact — Ismail Group AI</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 lg:px-20 py-16 flex-1">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg mb-12">Have questions? We'd love to hear from you.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">support@ismailgroupai.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Payhip Store</h3>
                  <a href="https://payhip.com/IsmailgroupAI" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                    https://payhip.com/IsmailgroupAI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="w-full border p-3 rounded" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" placeholder="Your email" className="w-full border p-3 rounded" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea placeholder="Your message" className="w-full border p-3 rounded" rows={5} required></textarea>
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-700 transition">
                  Send Message
                </button>
              </form>
              {sent && <p className="mt-4 text-green-600 font-semibold">✓ Thanks! We'll get back to you soon.</p>}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
