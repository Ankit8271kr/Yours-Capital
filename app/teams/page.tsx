import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail, MapPin, Users, Award, TrendingUp } from "lucide-react"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "Managing Partner",
    experience: "15+ years",
    image: "/images/team-rajesh.png",
    bio: "Former Goldman Sachs executive with extensive experience in venture capital and startup ecosystem development.",
    linkedin: "#",
    twitter: "#",
    email: "rajesh@aamukhcapital.com",
    expertise: ["Fintech", "Enterprise SaaS", "Strategic Planning"],
  },
  {
    name: "Priya Sharma",
    position: "Investment Director",
    experience: "12+ years",
    image: "/images/team-priya.png",
    bio: "Ex-Sequoia Capital professional specializing in early-stage investments and portfolio company growth.",
    linkedin: "#",
    twitter: "#",
    email: "priya@aamukhcapital.com",
    expertise: ["E-commerce", "Consumer Tech", "Market Analysis"],
  },
  {
    name: "Arjun Patel",
    position: "Principal",
    experience: "8+ years",
    image: "/images/team-arjun.png",
    bio: "Technology entrepreneur turned investor with deep expertise in AI/ML and enterprise software.",
    linkedin: "#",
    twitter: "#",
    email: "arjun@aamukhcapital.com",
    expertise: ["AI/ML", "Enterprise Software", "Product Strategy"],
  },
  {
    name: "Sneha Reddy",
    position: "Vice President",
    experience: "10+ years",
    image: "/images/team-sneha.png",
    bio: "Former McKinsey consultant with expertise in healthcare technology and operational excellence.",
    linkedin: "#",
    twitter: "#",
    email: "sneha@aamukhcapital.com",
    expertise: ["HealthTech", "Operations", "Strategic Consulting"],
  },
  {
    name: "Vikram Singh",
    position: "Investment Manager",
    experience: "6+ years",
    image: "/images/team-vikram.png",
    bio: "Ex-startup founder with hands-on experience in building and scaling technology companies.",
    linkedin: "#",
    twitter: "#",
    email: "vikram@aamukhcapital.com",
    expertise: ["EdTech", "Mobile Apps", "Growth Strategy"],
  },
  {
    name: "Anita Gupta",
    position: "Portfolio Manager",
    experience: "9+ years",
    image: "/images/team-anita.png",
    bio: "Investment banking background with focus on portfolio company support and exit strategies.",
    linkedin: "#",
    twitter: "#",
    email: "anita@aamukhcapital.com",
    expertise: ["Portfolio Management", "Exit Strategy", "Financial Planning"],
  },
]

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-indigo-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our diverse team of investment professionals brings together decades of experience in venture capital,
            entrepreneurship, and strategic consulting to support the next generation of startups.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">100+</div>
              <div className="text-sm text-gray-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">15+</div>
              <div className="text-sm text-gray-600">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">200+</div>
              <div className="text-sm text-gray-600">Successful Investments</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">View Open Positions</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="bg-transparent">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our investment strategy and support our portfolio companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-700">{member.experience}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Expertise</div>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <a href={member.linkedin} className="text-gray-400 hover:text-indigo-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.twitter} className="text-gray-400 hover:text-indigo-600 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-indigo-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our team culture and decision-making process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  We believe in the power of teamwork and collective intelligence to make better investment decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in everything we do, from due diligence to portfolio company support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Mindset</h3>
                <p className="text-gray-600 text-sm">
                  We embrace continuous learning and adaptation in the fast-evolving startup ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Impact</h3>
                <p className="text-gray-600 text-sm">
                  We're committed to building the Indian startup ecosystem and creating local economic impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished leaders and industry experts who provide strategic guidance and mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Raghuram Rajan", title: "Former RBI Governor", company: "University of Chicago" },
              { name: "Nandan Nilekani", title: "Co-founder", company: "Infosys" },
              { name: "Kiran Mazumdar-Shaw", title: "Executive Chairperson", company: "Biocon" },
              { name: "Uday Kotak", title: "Managing Director", company: "Kotak Mahindra Bank" },
            ].map((advisor, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{advisor.name}</h3>
                  <p className="text-indigo-600 text-sm font-medium mb-1">{advisor.title}</p>
                  <p className="text-gray-600 text-sm">{advisor.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Team</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for supporting entrepreneurs and
            building the future of Indian startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8">View Open Positions</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 bg-transparent"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
