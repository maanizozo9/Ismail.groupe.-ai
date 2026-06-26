import Link from 'next/link'
import { useState } from 'react'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">IG</div>
          <div>
            <div className="font-bold text-sm">Ismail Group</div>
            <div className="text-xs text-gray-500">AI Products</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/products" className="hover:text-indigo-600 transition">Products</Link>
          <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          <a href="https://payhip.com/IsmailgroupAI" target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Store</a>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link href="/products" className="hover:text-indigo-600 transition">Products</Link>
            <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
            <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
            <a href="https://payhip.com/IsmailgroupAI" target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-center">Store</a>
          </div>
        </div>
      )}
    </header>
  )
}
