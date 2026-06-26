import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="border-t bg-gray-50 mt-16">
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Ismail Group AI</h3>
            <p className="text-sm text-gray-600">High-quality digital products and AI tools for creators worldwide.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-indigo-600">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-indigo-600">Terms</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Visit Store</h3>
            <a href="https://payhip.com/IsmailgroupAI" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline text-sm">Payhip Store →</a>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>© 2024 Ismail Group AI. All rights reserved.</div>
          <div className="mt-4 md:mt-0">Made with ❤️ for creators worldwide</div>
        </div>
      </div>
    </footer>
  )
}
