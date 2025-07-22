import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Target, TrendingUp, Users, ArrowDown } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-600 font-medium mb-4">Smart Investment for Brighter Future</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Built In <span className="text-orange-500">BHARAT</span>
                <br />
                For The <span className="text-indigo-600">WORLD</span>
              </h1>
              <Link href="/apply">
                <div className="bg-indigo-600 text-white px-4 py-2 rounded-r-full inline-block mb-8 cursor-pointer hover:bg-indigo-700 transition-colors">
                  <span className="text-sm font-medium">APPLY NOW</span>
                </div>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-business-team.png"
                alt="Business team collaboration"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ArrowDown className="w-6 h-6 text-gray-600 animate-bounce" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-red-600 max-w-4xl mx-auto">
            <span className="font-semibold">Important:</span> Goodgupt is India's answer to modern lifestyle
            retail—vibrant, giftable, and endlessly fun. We helped launch the brand with a bold bid
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Startups</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">
                Funding
                <br />& Series Upgrades
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">350+</h3>
              <p className="text-gray-600">
                Investors
                <br />
                Community
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Startups Evaluated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Market Access</h3>
              <p className="text-gray-600 text-sm">
                We provide startups with access to global markets through our extensive network of international
                partners and investors.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Capital</h3>
              <p className="text-gray-600 text-sm">
                Our commitment extends beyond initial investment with continuous funding support through multiple
                rounds.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gap Based Monitoring</h3>
              <p className="text-gray-600 text-sm">
                We identify and address critical gaps in startup operations through systematic monitoring and support.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sector Specific Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our team brings deep knowledge and practical experience across various industry sectors and verticals.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Image
              src="/images/business-growth.png"
              alt="Business growth illustration"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-indigo-600 font-medium mb-2">SUCCESS</p>
            <h2 className="text-3xl font-bold text-gray-900">Inspiring Stories</h2>
          </div>
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl font-bold mb-4">OYO</div>
                  <p className="text-lg mb-6 opacity-90">
                    OYO is redefining travel and hospitality by offering comfortable, affordable stays.
                  </p>
                  <Link href="/teams">
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      Join Investors Network
                    </Button>
                  </Link>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/oyo-success-story.png"
                    alt="OYO Success Story"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">Snapshot of Our Model</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center">
                <Image
                  src="/images/early-stage-icon.png"
                  alt="Early Stage Startups"
                  width={150}
                  height={150}
                  className="mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  EARLY STAGE
                  <br />
                  STARTUPS
                </h3>
                <Link href="/programs/early-stage">
                  <Button
                    variant="outline"
                    className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                  >
                    Explore Program
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="text-center">
                <Image
                  src="/images/growth-program-icon.png"
                  alt="Growth Programs"
                  width={150}
                  height={150}
                  className="mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  GROWTH
                  <br />
                  PROGRAMS
                </h3>
                <Link href="/programs/growth">
                  <Button
                    variant="outline"
                    className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                  >
                    Explore Program
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 text-center mb-12">People About Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-orange-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/testimonial-john.png"
                    alt="Testimonial"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm opacity-90">CEO, TechStart</p>
                  </div>
                </div>
                <p className="text-sm">
                  "Aamukh Capital provided exceptional support and guidance throughout our funding journey."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/testimonial-sarah.png"
                    alt="Testimonial"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm opacity-90">Founder, InnovateCorp</p>
                  </div>
                </div>
                <p className="text-sm">
                  "Their sector-specific expertise helped us navigate complex market challenges effectively."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-orange-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/testimonial-mike.png"
                    alt="Testimonial"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">Mike Chen</h4>
                    <p className="text-sm opacity-90">CTO, FutureTech</p>
                  </div>
                </div>
                <p className="text-sm">
                  "The continuous capital support and mentorship made all the difference in our growth."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/testimonial-mary.png"
                    alt="Testimonial"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">Mary Wilson</h4>
                    <p className="text-sm opacity-90">CEO, GreenStart</p>
                  </div>
                </div>
                <p className="text-sm">
                  "Their global network opened doors we never thought possible for our startup."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/testimonial-david.png"
                    alt="Testimonial"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">David Kumar</h4>
                    <p className="text-sm opacity-90">Founder, NextGen</p>
                  </div>
                </div>
                <p className="text-sm">
                  "Professional, reliable, and truly committed to startup success. Highly recommended!"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-orange-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/testimonial-lisa.png"
                    alt="Testimonial"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">Lisa Zhang</h4>
                    <p className="text-sm opacity-90">CEO, SmartSolutions</p>
                  </div>
                </div>
                <p className="text-sm">
                  "The gap-based monitoring approach helped us identify and solve critical issues early."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="container mx-auto">
          <Card className="bg-indigo-700 border-0">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">Have more question ?</h2>
                <Link href="/contact">
                  <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8">CONTACT US</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
