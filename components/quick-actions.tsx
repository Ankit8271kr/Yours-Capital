"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, MessageCircle, DollarSign, Users, Phone } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/toast-provider"

export function QuickActions() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeAction, setActiveAction] = useState<string | null>(null)
  const [quickContactForm, setQuickContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { addToast } = useToast()

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault()
    addToast({
      type: "success",
      title: "Quick Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    setQuickContactForm({ name: "", email: "", message: "" })
    setActiveAction(null)
    setIsOpen(false)
  }

  const actions = [
    {
      id: "apply",
      icon: <DollarSign className="w-5 h-5" />,
      label: "Apply for Funding",
      color: "bg-green-500 hover:bg-green-600",
      href: "/apply",
    },
    {
      id: "invest",
      icon: <Users className="w-5 h-5" />,
      label: "Become Investor",
      color: "bg-indigo-500 hover:bg-indigo-600",
      href: "/become-investor",
    },
    {
      id: "contact",
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Quick Contact",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => setActiveAction("contact"),
    },
    {
      id: "call",
      icon: <Phone className="w-5 h-5" />,
      label: "Schedule Call",
      color: "bg-purple-500 hover:bg-purple-600",
      href: "/contact",
    },
  ]

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <span className="text-xl">+</span>}
        </Button>
      </div>

      {/* Quick Actions Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 space-y-3">
          {actions.map((action) => (
            <div key={action.id} className="flex items-center space-x-3">
              <span className="bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
                {action.label}
              </span>
              {action.href ? (
                <Link href={action.href}>
                  <Button
                    className={`w-12 h-12 rounded-full ${action.color} shadow-lg`}
                    onClick={() => setIsOpen(false)}
                  >
                    {action.icon}
                  </Button>
                </Link>
              ) : (
                <Button className={`w-12 h-12 rounded-full ${action.color} shadow-lg`} onClick={action.action}>
                  {action.icon}
                </Button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Quick Contact Modal */}
      {activeAction === "contact" && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Quick Contact</h3>
                <Button variant="ghost" size="sm" onClick={() => setActiveAction(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <form onSubmit={handleQuickContact} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={quickContactForm.name}
                  onChange={(e) => setQuickContactForm((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={quickContactForm.email}
                  onChange={(e) => setQuickContactForm((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={quickContactForm.message}
                  onChange={(e) => setQuickContactForm((prev) => ({ ...prev, message: e.target.value }))}
                  rows={3}
                  required
                />
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
