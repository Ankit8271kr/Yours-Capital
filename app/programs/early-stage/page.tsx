import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Rocket, Users, TrendingUp, Calendar, DollarSign } from "lucide-react"

export default function EarlyStageProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Early Stage <span className="text-indigo-600">Startup Program</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Designed for startups in their initial stages, our Early Stage Program provides the foundation, funding,
                and mentorship needed to transform innovative ideas into scalable businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">Apply Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/early-stage-program.png"
                alt="Early Stage Startup Program"
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
              Our Early Stage Program is specifically designed for startups that are ready to take their first major
              steps toward growth and market validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">$100K - $2M</h3>
                <p className="text-gray-600">Investment Range</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">6-12 Months</h3>
                <p className="text-gray-600">Program Duration</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1:1 Mentoring</h3>
                <p className="text-gray-600">Dedicated Support</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">85%</h3>
                <p className="text-gray-600">Success Rate</p>
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
              Comprehensive support designed to accelerate your startup's growth from concept to market-ready product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seed Funding</h3>
                <p className="text-gray-600 mb-4">
                  Initial capital injection ranging from $100K to $2M based on your startup's needs and potential.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Flexible funding terms</li>
                  <li>• Milestone-based releases</li>
                  <li>• Follow-on investment opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
                <p className="text-gray-600 mb-4">
                  Access to our network of successful entrepreneurs, industry experts, and seasoned investors.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Weekly 1:1 mentoring sessions</li>
                  <li>• Industry-specific guidance</li>
                  <li>• Strategic planning support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Product Development</h3>
                <p className="text-gray-600 mb-4">
                  Technical and product development support to help you build and refine your MVP.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technical architecture review</li>
                  <li>• Product roadmap planning</li>
                  <li>• Quality assurance support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Validation</h3>
                <p className="text-gray-600 mb-4">
                  Systematic approach to validate your business model and find product-market fit.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer discovery workshops</li>
                  <li>• Market research support</li>
                  <li>• Pilot program facilitation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Go-to-Market Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive marketing and sales strategy development for successful market entry.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Marketing strategy development</li>
                  <li>• Sales process optimization</li>
                  <li>• Brand positioning guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Network Access</h3>
                <p className="text-gray-600 mb-4">
                  Connect with our extensive network of partners, customers, and fellow entrepreneurs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Investor introductions</li>
                  <li>• Partnership opportunities</li>
                  <li>• Customer connections</li>
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
                We look for startups that demonstrate strong potential and are ready to commit to rapid growth.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Early Stage Company</h4>
                    <p className="text-gray-600 text-sm">Pre-seed to seed stage with MVP or prototype ready</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Strong Founding Team</h4>
                    <p className="text-gray-600 text-sm">
                      Committed founders with relevant experience and complementary skills
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable Business Model</h4>
                    <p className="text-gray-600 text-sm">
                      Clear path to scalability with potential for significant market impact
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Opportunity</h4>
                    <p className="text-gray-600 text-sm">Addressing a significant market need with growth potential</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Commitment to Growth</h4>
                    <p className="text-gray-600 text-sm">
                      Willingness to dedicate full-time effort and accept mentorship
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/eligibility-criteria.png"
                alt="Eligibility Criteria"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of the successful startups that have graduated from our Early Stage Program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/techstart-success.png"
                  alt="TechStart Success Story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">TechStart</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    B2B SaaS platform that went from idea to $1M ARR in 18 months with our support.
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Graduated: 2023</span>
                    <span>Valuation: $15M</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/healthtech-success.png"
                  alt="HealthTech Success Story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">HealthTech Pro</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Digital health platform serving 100K+ patients across 5 countries.
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Graduated: 2022</span>
                    <span>Valuation: $25M</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/edutech-success.png"
                  alt="EduTech Success Story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">EduTech Solutions</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Online learning platform with 500K+ active users and partnerships with top universities.
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Graduated: 2023</span>
                    <span>Valuation: $12M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify and support the most promising early-stage
              startups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">
                Complete our comprehensive online application form with your business details and pitch deck.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">
                Our team reviews your application and conducts initial screening within 5-7 business days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Interview & Pitch</h3>
              <p className="text-gray-600 text-sm">
                Selected candidates present their startup to our investment committee via video call or in-person.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Program Onboarding</h3>
              <p className="text-gray-600 text-sm">
                Successful applicants join our program with funding, mentorship, and comprehensive support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Startup?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our Early Stage Program and get the funding, mentorship, and support you need to build a successful
            company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">Apply Now</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 bg-transparent"
              >
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
