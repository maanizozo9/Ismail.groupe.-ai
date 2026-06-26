import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const siteUrl = 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app'

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Ismail Group AI',
    url: `${siteUrl}/contact`,
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission here
    setStatus('Thank you for your message. We will get back to you soon!')
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <>
      <Head>
        <title>Contact Us | Ismail Group AI</title>
        <meta name="description" content="Get in touch with Ismail Group AI. Have questions about our products? We're here to help!" />
        <meta name="keywords" content="contact, support, Ismail Group, help" />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Ismail Group AI" />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        
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
              <h1 className="text-4xl lg:text-5xl font-bold">Get in Touch</h1>
              <p className="mt-4 text-lg">We'd love to hear from you. Send us a message!</p>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a href="mailto:support@ismailgroupai.com" className="text-indigo-600 hover:text-indigo-700">support@ismailgroupai.com</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Support Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM UTC</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Store</h3>
                    <a href="https://payhip.com/IsmailgroupAI" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700">Visit Payhip Store</a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition">
                  Send Message
                </button>
                {status && <p className="mt-4 text-green-600 text-center">{status}</p>}
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
