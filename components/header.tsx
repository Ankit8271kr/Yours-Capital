"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Teams", href: "/teams" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "About", href: "/about" },
  ]

  return (
    <header className="border-b border-gray-100 px-4 py-4 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Aamukh Capital
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-indigo-600 hover:bg-indigo-700">Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors ${
                  pathname === item.href ? "text-indigo-600 font-medium" : "text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Contact Us</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
