import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, Award, Heart, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-indigo-600">Aamukh Capital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We are a leading venture capital firm focused on empowering startups built in Bharat for the world. Our
                mission is to bridge the gap between innovative Indian entrepreneurs and global opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">Our Portfolio</Button>
                </Link>
                <Link href="/teams">
                  <Button variant="outline">Meet Our Team</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about-aamukh-capital.png"
                alt="About Aamukh Capital"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the transformative power of innovation and entrepreneurship to create a better future for
              all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To identify, invest in, and nurture exceptional startups that have the potential to create significant
                  impact while generating sustainable returns for our investors. We are committed to supporting
                  entrepreneurs who are building solutions for global challenges.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 text-center">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted partner for ambitious entrepreneurs, helping them build world-class companies
                  that originate from India but serve global markets. We envision a future where Indian startups lead
                  innovation across industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015, Aamukh Capital emerged from a simple yet powerful belief: that India's
                  entrepreneurial talent, combined with the right support and capital, could create solutions for global
                  challenges.
                </p>
                <p>
                  Our founders, having witnessed the transformation of India's startup ecosystem, recognized the need
                  for a venture capital firm that truly understood the unique challenges and opportunities in the Indian
                  market while maintaining a global perspective.
                </p>
                <p>
                  Over the years, we have evolved from a small fund focused on early-stage investments to a
                  comprehensive platform that supports startups throughout their journey, from ideation to IPO and
                  beyond.
                </p>
                <p>
                  Today, we manage over $2 billion in assets and have invested in more than 150 companies across various
                  sectors, with 12 of them achieving unicorn status and 25 successful exits.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/our-story.png"
                alt="Our Story"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  We conduct business with the highest ethical standards and transparency in all our dealings.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empathy</h3>
                <p className="text-gray-600 text-sm">
                  We understand the challenges entrepreneurs face and provide support beyond just capital.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in everything we do, from investment decisions to portfolio support.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  We believe in the power of collaboration and building strong, long-term partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our investment approach is built on deep market understanding, rigorous analysis, and long-term value
              creation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sector Agnostic</h3>
                <p className="text-gray-600 text-sm">
                  We invest across sectors but focus on businesses with strong fundamentals, scalable models, and
                  exceptional founding teams.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stage Flexible</h3>
                <p className="text-gray-600 text-sm">
                  From seed to growth stage, we adapt our investment approach based on the company's needs and growth
                  trajectory.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Mindset</h3>
                <p className="text-gray-600 text-sm">
                  We look for companies that can scale globally while leveraging India's unique advantages in talent and
                  innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and publications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Best VC Fund 2023</h3>
                <p className="text-gray-600 text-sm">Economic Times Startup Awards</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Top 10 VCs in India</h3>
                <p className="text-gray-600 text-sm">Forbes India 2023</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Excellence in ESG</h3>
                <p className="text-gray-600 text-sm">IVCA Awards 2022</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Investor of the Year</h3>
                <p className="text-gray-600 text-sm">YourStory 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you're an entrepreneur with a groundbreaking idea or an investor looking for exceptional
            opportunities, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8">Apply for Funding</Button>
            </Link>
            <Link href="/become-investor">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 bg-transparent"
              >
                Become an Investor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
