"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/components/toast-provider"
import { useState } from "react"

export function Footer() {
  const { addToast } = useToast()
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      addToast({
        type: "warning",
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
      })
      return
    }

    addToast({
      type: "success",
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive our latest insights weekly.",
    })

    setEmail("")
  }

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aamukh Capital</h3>
            <p className="text-sm opacity-90 mb-4">
              Empowering startups to build the future, connecting Indian innovation with global opportunities.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 cursor-pointer hover:opacity-80" />
              <Instagram className="w-6 h-6 cursor-pointer hover:opacity-80" />
              <Facebook className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">CONTACT US</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <div>
                  <p>Office</p>
                  <p>Gurugram, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <p>+91 XXXXXXXXX</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <p>info@aamukhcapital.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <p>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </p>
              <p>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </p>
              <p>
                <Link href="/portfolio" className="hover:underline">
                  Portfolio
                </Link>
              </p>
              <p>
                <Link href="/teams" className="hover:underline">
                  Teams
                </Link>
              </p>
              <p>
                <Link href="/newsletter" className="hover:underline">
                  Newsletter
                </Link>
              </p>
              <p>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe Newsletter</h4>
            <p className="text-sm opacity-90 mb-4">Get the latest updates on startup funding and market insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button type="submit" className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Aamukh Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
