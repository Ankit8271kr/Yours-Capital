"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText, TrendingUp, Shield, Users, Globe } from "lucide-react"
import { useToast } from "@/components/toast-provider"

const guides = [
  {
    id: "startup-funding",
    title: "Complete Startup Funding Guide",
    description: "Everything you need to know about raising capital for your startup",
    pages: 45,
    topics: ["Funding Stages", "Valuation", "Term Sheets", "Due Diligence"],
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    id: "investor-handbook",
    title: "Angel Investor Handbook",
    description: "A comprehensive guide for first-time angel investors",
    pages: 32,
    topics: ["Investment Basics", "Risk Assessment", "Portfolio Strategy", "Legal Framework"],
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: "market-analysis",
    title: "Indian Startup Market Analysis 2024",
    description: "In-depth analysis of the Indian startup ecosystem",
    pages: 28,
    topics: ["Market Trends", "Sector Analysis", "Growth Projections", "Success Stories"],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management Best Practices",
    description: "How to effectively manage and support your portfolio companies",
    pages: 38,
    topics: ["Portfolio Strategy", "Company Support", "Exit Planning", "Performance Metrics"],
    icon: <Users className="w-6 h-6" />,
  },
]

export default function InvestmentGuidePage() {
  const [selectedGuides, setSelectedGuides] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    experience: "",
    interests: [],
  })

  const { addToast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedGuides.length === 0) {
      addToast({
        type: "warning",
        title: "Select Guides",
        description: "Please select at least one guide to download.",
      })
      return
    }

    addToast({
      type: "success",
      title: "Download Started!",
      description: `${selectedGuides.length} guide(s) sent to your email.`,
    })

    // Simulate download
    setTimeout(() => {
      selectedGuides.forEach((guideId) => {
        const guide = guides.find((g) => g.id === guideId)
        if (guide) {
          // Create a mock download
          const link = document.createElement("a")
          link.href = "#"
          link.download = `${guide.title.replace(/\s+/g, "_")}.pdf`
          link.click()
        }
      })
    }, 1000)
  }

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleGuide = (guideId: string) => {
    setSelectedGuides((prev) => (prev.includes(guideId) ? prev.filter((id) => id !== guideId) : [...prev, guideId]))
  }

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Investment <span className="text-indigo-600">Guides</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive guides to help you navigate the startup investment landscape. From funding basics
            to advanced portfolio management strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Guide Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Available Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guides.map((guide) => (
                    <div
                      key={guide.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedGuides.includes(guide.id)
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => toggleGuide(guide.id)}
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox checked={selectedGuides.includes(guide.id)} onChange={() => toggleGuide(guide.id)} />
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                              {guide.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-1">{guide.title}</h3>
                              <p className="text-gray-600 text-sm mb-2">{guide.description}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>{guide.pages} pages</span>
                                <span>PDF format</span>
                              </div>
                            </div>
                          </div>
                          <div className="ml-13">
                            <div className="text-sm font-medium text-gray-700 mb-1">Topics Covered:</div>
                            <div className="flex flex-wrap gap-1">
                              {guide.topics.map((topic, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Selected:</strong> {selectedGuides.length} guide(s) • Total pages:{" "}
                    {guides.filter((g) => selectedGuides.includes(g.id)).reduce((sum, g) => sum + g.pages, 0)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-indigo-600" />
                  Download Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => updateFormData("company", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="role">Your Role *</Label>
                    <Select value={formData.role} onValueChange={(value) => updateFormData("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entrepreneur">Entrepreneur/Founder</SelectItem>
                        <SelectItem value="investor">Angel Investor</SelectItem>
                        <SelectItem value="vc">VC Professional</SelectItem>
                        <SelectItem value="advisor">Startup Advisor</SelectItem>
                        <SelectItem value="student">Student/Researcher</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Investment Experience</Label>
                    <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                        <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                        <SelectItem value="expert">Expert (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Areas of Interest</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {["Fintech", "HealthTech", "EdTech", "E-commerce", "SaaS", "AI/ML"].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={() => toggleInterest(interest)}
                          />
                          <Label htmlFor={interest} className="text-sm">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Guides will be sent to your email and are also available for immediate
                      download.
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Selected Guides
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Additional Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  📊 Market Research Reports
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  📈 Investment Calculator
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  🎯 Startup Evaluation Framework
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  📋 Due Diligence Checklist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Download Our Guides?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Insights</h3>
                <p className="text-gray-600 text-sm">
                  Written by our experienced investment team with real-world examples and case studies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Actionable Content</h3>
                <p className="text-gray-600 text-sm">
                  Practical frameworks, templates, and checklists you can implement immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Updated Regularly</h3>
                <p className="text-gray-600 text-sm">
                  Our guides are updated quarterly to reflect the latest market trends and regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
