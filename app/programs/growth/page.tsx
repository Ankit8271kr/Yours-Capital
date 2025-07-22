import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Globe, Users, Calendar, DollarSign } from "lucide-react"

export default function GrowthProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Growth <span className="text-indigo-600">Program</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For established startups ready to scale rapidly, our Growth Program provides substantial funding,
                strategic guidance, and global expansion support to achieve unicorn status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">Apply Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="bg-transparent">
                    Schedule Meeting
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/growth-program.png"
                alt="Growth Program"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Growth Program is designed for startups that have achieved product-market fit and are ready for rapid
              scaling and international expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">$5M - $50M</h3>
                <p className="text-gray-600">Investment Range</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">12-24 Months</h3>
                <p className="text-gray-600">Program Duration</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-600">International Expansion</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">10x Growth</h3>
                <p className="text-gray-600">Average Scale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive growth acceleration services designed to help established startups achieve rapid scale and
              market leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Capital</h3>
                <p className="text-gray-600 mb-4">
                  Substantial funding from $5M to $50M+ to fuel rapid expansion and market capture.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Series A, B, C funding</li>
                  <li>• Bridge financing options</li>
                  <li>• Follow-on investment commitment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Expansion</h3>
                <p className="text-gray-600 mb-4">
                  Strategic support for international market entry and global scaling operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Market entry strategies</li>
                  <li>• Local partnership facilitation</li>
                  <li>• Regulatory compliance support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Coaching</h3>
                <p className="text-gray-600 mb-4">
                  Leadership development and executive coaching for founders and senior management teams.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CEO/founder coaching</li>
                  <li>• Leadership team development</li>
                  <li>• Board governance support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scale Operations</h3>
                <p className="text-gray-600 mb-4">
                  Operational excellence support to handle rapid growth and increased complexity.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Process optimization</li>
                  <li>• Technology infrastructure</li>
                  <li>• Quality management systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Partnerships</h3>
                <p className="text-gray-600 mb-4">
                  Access to strategic partnerships with industry leaders and enterprise customers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Enterprise customer introductions</li>
                  <li>• Technology partnerships</li>
                  <li>• Distribution channel access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IPO Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive support for public market readiness and exit strategy execution.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Financial reporting systems</li>
                  <li>• Compliance and governance</li>
                  <li>• Investment banking connections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              <p className="text-xl text-gray-600 mb-8">
                We partner with high-growth startups that have demonstrated strong traction and are ready for rapid
                scaling.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Traction</h4>
                    <p className="text-gray-600 text-sm">
                      $1M+ ARR or significant user base with strong growth metrics
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Product-Market Fit</h4>
                    <p className="text-gray-600 text-sm">
                      Clear evidence of product-market fit with strong customer retention
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable Business Model</h4>
                    <p className="text-gray-600 text-sm">Proven unit economics and clear path to profitability</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Large Market Opportunity</h4>
                    <p className="text-gray-600 text-sm">
                      Addressing a market with $1B+ potential and global expansion opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Strong Leadership Team</h4>
                    <p className="text-gray-600 text-sm">Experienced management team capable of executing at scale</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/growth-eligibility.png"
                alt="Growth Program Eligibility"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Growth Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies that have achieved remarkable growth through our Growth Program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/oyo-success-story.png"
                  alt="OYO Success Story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">OYO</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Scaled from India to 80+ countries, becoming the world's largest hospitality chain.
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Growth: 50x in 3 years</span>
                    <span>Valuation: $9.6B</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/razorpay-success-story.png"
                  alt="Razorpay Success Story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Razorpay</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Became India's leading payment gateway processing $60B+ annually.
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Growth: 100x in 4 years</span>
                    <span>Valuation: $7.5B</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/swiggy-success-story.png"
                  alt="Swiggy Success Story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Swiggy</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Expanded to 500+ cities and diversified into grocery delivery and cloud kitchens.
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Growth: 200x in 5 years</span>
                    <span>Valuation: $10.7B</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Startup?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our Growth Program and accelerate your journey to becoming a market leader with substantial funding and
            strategic support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">Apply for Growth Program</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 bg-transparent"
              >
                Schedule Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
