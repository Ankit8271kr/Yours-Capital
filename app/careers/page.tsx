"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, Search, Briefcase, Heart, Lightbulb, TrendingUp } from "lucide-react"
import { useToast } from "@/components/toast-provider"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Investment Analyst",
    department: "Investment",
    location: "Mumbai",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹15-25 LPA",
    applicants: 45,
    description: "Lead investment analysis and due diligence for early-stage startups across various sectors.",
    requirements: ["MBA/CFA preferred", "3+ years in VC/PE", "Strong analytical skills", "Startup ecosystem knowledge"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Portfolio Manager",
    department: "Portfolio",
    location: "Mumbai",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹25-40 LPA",
    applicants: 32,
    description: "Manage and support portfolio companies through their growth journey and strategic initiatives.",
    requirements: ["8+ years experience", "Portfolio management background", "Strategic thinking", "Leadership skills"],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Investment Associate",
    department: "Investment",
    location: "Bangalore",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹8-15 LPA",
    applicants: 78,
    description: "Support investment team in deal sourcing, analysis, and portfolio company management.",
    requirements: ["Bachelor's degree", "1-3 years experience", "Financial modeling", "Research skills"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Mumbai",
    type: "Full-time",
    experience: "4-6 years",
    salary: "₹12-20 LPA",
    applicants: 56,
    description: "Lead marketing initiatives, brand building, and investor relations communications.",
    requirements: ["Marketing degree", "4+ years experience", "Digital marketing", "Content creation"],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Legal Counsel",
    department: "Legal",
    location: "Mumbai",
    type: "Full-time",
    experience: "5-10 years",
    salary: "₹20-35 LPA",
    applicants: 23,
    description: "Handle legal aspects of investments, compliance, and portfolio company legal support.",
    requirements: ["Law degree", "5+ years experience", "Corporate law expertise", "VC/PE experience"],
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Data Analyst",
    department: "Operations",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹10-18 LPA",
    applicants: 67,
    description: "Analyze market trends, portfolio performance, and support data-driven investment decisions.",
    requirements: ["Analytics degree", "2+ years experience", "Python/R skills", "Data visualization"],
    posted: "4 days ago",
  },
]

const departments = ["All", "Investment", "Portfolio", "Marketing", "Legal", "Operations"]
const locations = ["All", "Mumbai", "Bangalore", "Delhi"]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const { addToast } = useToast()

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation

    return matchesSearch && matchesDepartment && matchesLocation
  })

  const handleQuickApply = (jobTitle: string) => {
    addToast({
      type: "success",
      title: "Application Started!",
      description: `Redirecting to application form for ${jobTitle}`,
    })

    setTimeout(() => {
      window.location.href = `/careers/apply?job=${encodeURIComponent(jobTitle)}`
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-indigo-600">Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Be part of India's leading venture capital firm and help shape the future of startups. We're looking for
                passionate individuals who want to make a difference.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">6</div>
                  <div className="text-sm text-gray-600">Open Positions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">95%</div>
                  <div className="text-sm text-gray-600">Employee Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/careers-hero.png"
                alt="Join our team"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Discover exciting opportunities to grow your career with us</p>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{job.department}</Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="outline">{job.type}</Badge>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center gap-1 mb-1">
                            <Users className="w-3 h-3" />
                            {job.applicants} applicants
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.posted}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">Experience</div>
                          <div className="text-sm text-gray-600">{job.experience}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">Salary Range</div>
                          <div className="text-sm text-gray-600">{job.salary}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Key Requirements</div>
                        <div className="flex flex-wrap gap-1">
                          {job.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:w-48">
                      <Button className="w-full" onClick={() => handleQuickApply(job.title)}>
                        Quick Apply
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No positions found matching your criteria.</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your search filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Aamukh Capital?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, learning, and making a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
                <p className="text-gray-600 text-sm">
                  Accelerate your career with mentorship from industry leaders and exposure to high-growth startups.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Great Benefits</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive health insurance, flexible work arrangements, and competitive compensation packages.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Work with cutting-edge startups and be at the forefront of technological innovation and disruption.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Amazing Team</h3>
                <p className="text-gray-600 text-sm">
                  Join a diverse, talented team of professionals who are passionate about building the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and contribute to our shared success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Environment</h3>
                  <p className="text-gray-600">
                    We foster open communication, knowledge sharing, and cross-functional collaboration to achieve our
                    goals together.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">
                    We invest in our team's growth through training programs, conferences, and mentorship opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    We understand the importance of balance and offer flexible working arrangements to support our
                    team's well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/office-culture.png"
                alt="Office Culture"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for exceptional talent. Send us your resume and let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8">Send Your Resume</Button>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 bg-transparent"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
