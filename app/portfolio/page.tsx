"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, TrendingUp, Users, Calendar, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { PortfolioStats } from "@/components/portfolio-stats"

const portfolioCompanies = [
  {
    name: "OYO",
    sector: "Hospitality",
    stage: "Growth",
    founded: 2013,
    valuation: "$9.6B",
    description: "India's largest hospitality company, revolutionizing budget accommodation.",
    logo: "/images/oyo-logo.png",
    website: "https://oyo.com",
    status: "Active",
    fundingRound: "Series F",
    employees: "25,000+",
    markets: ["India", "Southeast Asia", "Europe"],
  },
  {
    name: "Razorpay",
    sector: "Fintech",
    stage: "Growth",
    founded: 2014,
    valuation: "$7.5B",
    description: "Leading payment gateway and financial services platform for businesses.",
    logo: "/images/razorpay-logo.png",
    website: "https://razorpay.com",
    status: "Active",
    fundingRound: "Series F",
    employees: "3,000+",
    markets: ["India", "Malaysia"],
  },
  {
    name: "Zomato",
    sector: "Food Tech",
    stage: "Public",
    founded: 2008,
    valuation: "$5.4B",
    description: "Food delivery and restaurant discovery platform serving millions of users.",
    logo: "/images/zomato-logo.png",
    website: "https://zomato.com",
    status: "IPO",
    fundingRound: "Public",
    employees: "5,000+",
    markets: ["India", "UAE", "Australia"],
  },
  {
    name: "Freshworks",
    sector: "SaaS",
    stage: "Public",
    founded: 2010,
    valuation: "$3.5B",
    description: "Customer experience software company serving businesses worldwide.",
    logo: "/images/freshworks-logo.png",
    website: "https://freshworks.com",
    status: "IPO",
    fundingRound: "Public",
    employees: "4,500+",
    markets: ["Global"],
  },
  {
    name: "Nykaa",
    sector: "E-commerce",
    stage: "Public",
    founded: 2012,
    valuation: "$7.4B",
    description: "Leading beauty and personal care e-commerce platform.",
    logo: "/images/nykaa-logo.png",
    website: "https://nykaa.com",
    status: "IPO",
    fundingRound: "Public",
    employees: "2,000+",
    markets: ["India", "Middle East"],
  },
  {
    name: "Meesho",
    sector: "E-commerce",
    stage: "Growth",
    founded: 2015,
    valuation: "$4.9B",
    description: "Social commerce platform enabling small businesses to sell online.",
    logo: "/images/meesho-logo.png",
    website: "https://meesho.com",
    status: "Active",
    fundingRound: "Series E",
    employees: "1,500+",
    markets: ["India"],
  },
  {
    name: "PhonePe",
    sector: "Fintech",
    stage: "Growth",
    founded: 2015,
    valuation: "$12B",
    description: "Digital payments and financial services platform.",
    logo: "/images/phonepe-logo.png",
    website: "https://phonepe.com",
    status: "Active",
    fundingRound: "Series D",
    employees: "3,500+",
    markets: ["India"],
  },
  {
    name: "Swiggy",
    sector: "Food Tech",
    stage: "Growth",
    founded: 2014,
    valuation: "$10.7B",
    description: "On-demand delivery platform for food, groceries, and more.",
    logo: "/images/swiggy-logo.png",
    website: "https://swiggy.com",
    status: "Active",
    fundingRound: "Series J",
    employees: "6,000+",
    markets: ["India"],
  },
]

const sectors = ["All", "Fintech", "E-commerce", "Food Tech", "SaaS", "Hospitality"]
const stages = ["All", "Early Stage", "Growth", "Public"]

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSector, setSelectedSector] = useState("All")
  const [selectedStage, setSelectedStage] = useState("All")

  const filteredCompanies = portfolioCompanies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = selectedSector === "All" || company.sector === selectedSector
    const matchesStage = selectedStage === "All" || company.stage === selectedStage

    return matchesSearch && matchesSector && matchesStage
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-indigo-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're proud to partner with innovative companies that are transforming industries and creating value for
            millions of users worldwide.
          </p>
          <PortfolioStats />
          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Our Portfolio Companies?</h3>
              <p className="text-gray-600 mb-6">
                Join our exclusive investor network to get early access to high-potential startups and co-investment
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/become-investor">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">Become an Investor</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="bg-transparent">
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {company.sector}
                        </Badge>
                      </div>
                    </div>
                    <Badge
                      variant={company.status === "IPO" ? "default" : "outline"}
                      className={company.status === "IPO" ? "bg-green-100 text-green-800" : ""}
                    >
                      {company.status}
                    </Badge>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{company.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <TrendingUp className="w-4 h-4" />
                        <span>Valuation</span>
                      </div>
                      <div className="font-semibold">{company.valuation}</div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>Employees</span>
                      </div>
                      <div className="font-semibold">{company.employees}</div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Founded</span>
                      </div>
                      <div className="font-semibold">{company.founded}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Stage</div>
                      <div className="font-semibold">{company.stage}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-500 text-sm mb-1">Markets</div>
                    <div className="flex flex-wrap gap-1">
                      {company.markets.map((market, marketIndex) => (
                        <Badge key={marketIndex} variant="outline" className="text-xs">
                          {market}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No companies found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Portfolio Success Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-gray-600">Survival Rate</div>
                <div className="text-sm text-gray-500 mt-1">Companies still operating</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600 mb-2">15x</div>
                <div className="text-gray-600">Average Return</div>
                <div className="text-sm text-gray-500 mt-1">On successful exits</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600 mb-2">3.2 years</div>
                <div className="text-gray-600">Average Time to Exit</div>
                <div className="text-sm text-gray-500 mt-1">From initial investment</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600 mb-2">500K+</div>
                <div className="text-gray-600">Jobs Created</div>
                <div className="text-sm text-gray-500 mt-1">Across portfolio companies</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
