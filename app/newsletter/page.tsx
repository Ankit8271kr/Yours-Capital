"use client"

import type React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Search, Eye } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/toast-provider"

const newsletters = [
  {
    id: 1,
    title: "The Rise of Indian SaaS: A Global Phenomenon",
    excerpt:
      "Exploring how Indian SaaS companies are capturing global markets and what this means for the future of enterprise software.",
    author: "Rajesh Kumar",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Market Analysis",
    image: "/placeholder.svg?height=200&width=400",
    views: 2500,
    featured: true,
    tags: ["SaaS", "Global Markets", "Indian Startups"],
  },
  {
    id: 2,
    title: "Fintech Revolution: Digital Payments in Rural India",
    excerpt:
      "How digital payment platforms are transforming financial inclusion in rural areas and creating new opportunities for growth.",
    author: "Priya Sharma",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Fintech",
    image: "/placeholder.svg?height=200&width=400",
    views: 1800,
    featured: false,
    tags: ["Fintech", "Rural India", "Digital Payments"],
  },
  {
    id: 3,
    title: "Sustainable Investing: ESG Trends in Emerging Markets",
    excerpt:
      "The growing importance of Environmental, Social, and Governance factors in investment decisions across emerging markets.",
    author: "Anita Reddy",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    category: "ESG",
    image: "/placeholder.svg?height=200&width=400",
    views: 3200,
    featured: true,
    tags: ["ESG", "Sustainability", "Emerging Markets"],
  },
  {
    id: 4,
    title: "E-commerce Evolution: The Social Commerce Boom",
    excerpt:
      "Understanding the shift towards social commerce and how platforms are leveraging social networks for sales.",
    author: "Arjun Patel",
    publishDate: "2024-01-01",
    readTime: "7 min read",
    category: "E-commerce",
    image: "/placeholder.svg?height=200&width=400",
    views: 2100,
    featured: false,
    tags: ["E-commerce", "Social Commerce", "Consumer Behavior"],
  },
  {
    id: 5,
    title: "Healthcare Tech: Telemedicine's Post-Pandemic Future",
    excerpt:
      "Analyzing the long-term impact of telemedicine adoption and its role in transforming healthcare delivery.",
    author: "Sneha Gupta",
    publishDate: "2023-12-28",
    readTime: "9 min read",
    category: "Healthcare",
    image: "/placeholder.svg?height=200&width=400",
    views: 1950,
    featured: false,
    tags: ["Healthcare", "Telemedicine", "Digital Health"],
  },
  {
    id: 6,
    title: "AI and Machine Learning: Transforming Indian Businesses",
    excerpt:
      "How artificial intelligence and machine learning are being adopted by Indian companies to drive innovation and efficiency.",
    author: "Vikram Singh",
    publishDate: "2023-12-25",
    readTime: "11 min read",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
    views: 2800,
    featured: true,
    tags: ["AI", "Machine Learning", "Innovation"],
  },
]

const categories = ["All", "Market Analysis", "Fintech", "ESG", "E-commerce", "Healthcare", "Technology"]

export default function NewsletterPage() {
  const { addToast } = useToast()
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesSearch =
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || newsletter.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredNewsletters = filteredNewsletters.filter((newsletter) => newsletter.featured)
  const regularNewsletters = filteredNewsletters.filter((newsletter) => !newsletter.featured)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) {
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
      description: "Welcome to our newsletter! You'll receive weekly insights on startup funding and market trends.",
    })

    setNewsletterEmail("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Investment <span className="text-indigo-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay informed with our latest analysis on market trends, startup ecosystems, and investment opportunities in
            emerging markets.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1"
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredNewsletters.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredNewsletters.map((newsletter) => (
                <Card key={newsletter.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={newsletter.image || "/placeholder.svg"}
                        alt={newsletter.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-indigo-600">Featured</Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="secondary">{newsletter.category}</Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          {newsletter.views.toLocaleString()}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{newsletter.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{newsletter.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{newsletter.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(newsletter.publishDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{newsletter.readTime}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {newsletter.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid gap-8">
            {regularNewsletters.map((newsletter) => (
              <Card key={newsletter.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative">
                      <Image
                        src={newsletter.image || "/placeholder.svg"}
                        alt={newsletter.title}
                        width={400}
                        height={200}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="secondary">{newsletter.category}</Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          {newsletter.views.toLocaleString()}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{newsletter.title}</h3>
                      <p className="text-gray-600 mb-4">{newsletter.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{newsletter.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(newsletter.publishDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{newsletter.readTime}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {newsletter.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline">Read More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNewsletters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get our weekly newsletter with the latest insights on startup funding, market trends, and investment
            opportunities.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white"
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <Button type="submit" className="bg-white text-indigo-600 hover:bg-gray-100">
              Subscribe Now
            </Button>
          </form>
          <p className="text-sm text-indigo-200 mt-4">
            Join 10,000+ investors and entrepreneurs who trust our insights.
          </p>
        </div>
      </section>
    </div>
  )
}
