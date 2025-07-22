"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/toast-provider"
import { useRouter } from "next/navigation"

export default function BecomeInvestorPage() {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",

    // Investment Profile
    investorType: "",
    investmentRange: "",
    investmentHorizon: "",
    riskTolerance: "",
    preferredSectors: [],

    // Financial Info
    netWorth: "",
    liquidAssets: "",
    investmentExperience: "",

    // Additional Info
    motivation: "",
    expectations: "",
    accreditedInvestor: false,
    termsAccepted: false,
  })

  const { addToast } = useToast()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addToast({
      type: "success",
      title: "Application Received!",
      description: "Our team will contact you within 2 business days.",
    })

    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleSector = (sector: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredSectors: prev.preferredSectors.includes(sector)
        ? prev.preferredSectors.filter((s) => s !== sector)
        : [...prev.preferredSectors, sector],
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Become an Investor</h1>
          <p className="text-gray-600">Join our network of investors and access exclusive investment opportunities</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="country">Country *</Label>
                <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Investment Profile */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Investor Type *</Label>
                <RadioGroup
                  value={formData.investorType}
                  onValueChange={(value) => updateFormData("investorType", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual">Individual Investor</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="institutional" id="institutional" />
                    <Label htmlFor="institutional">Institutional Investor</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="family-office" id="family-office" />
                    <Label htmlFor="family-office">Family Office</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="investmentRange">Investment Range *</Label>
                  <Select
                    value={formData.investmentRange}
                    onValueChange={(value) => updateFormData("investmentRange", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                      <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                      <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="investmentHorizon">Investment Horizon *</Label>
                  <Select
                    value={formData.investmentHorizon}
                    onValueChange={(value) => updateFormData("investmentHorizon", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select horizon" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-7">5-7 years</SelectItem>
                      <SelectItem value="7+">7+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="riskTolerance">Risk Tolerance *</Label>
                <Select
                  value={formData.riskTolerance}
                  onValueChange={(value) => updateFormData("riskTolerance", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk tolerance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="aggressive">Aggressive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Preferred Sectors (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {[
                    "Fintech",
                    "HealthTech",
                    "EdTech",
                    "E-commerce",
                    "SaaS",
                    "AI/ML",
                    "Blockchain",
                    "CleanTech",
                    "FoodTech",
                  ].map((sector) => (
                    <div key={sector} className="flex items-center space-x-2">
                      <Checkbox
                        id={sector}
                        checked={formData.preferredSectors.includes(sector)}
                        onCheckedChange={() => toggleSector(sector)}
                      />
                      <Label htmlFor={sector} className="text-sm">
                        {sector}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Information */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="netWorth">Net Worth Range *</Label>
                  <Select value={formData.netWorth} onValueChange={(value) => updateFormData("netWorth", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m+">$5M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="liquidAssets">Liquid Assets *</Label>
                  <Select
                    value={formData.liquidAssets}
                    onValueChange={(value) => updateFormData("liquidAssets", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                      <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="investmentExperience">Investment Experience *</Label>
                <Textarea
                  id="investmentExperience"
                  value={formData.investmentExperience}
                  onChange={(e) => updateFormData("investmentExperience", e.target.value)}
                  placeholder="Describe your investment experience..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="motivation">What motivates you to invest in startups?</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => updateFormData("motivation", e.target.value)}
                  placeholder="Share your motivation..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="expectations">What are your expectations from Aamukh Capital?</Label>
                <Textarea
                  id="expectations"
                  value={formData.expectations}
                  onChange={(e) => updateFormData("expectations", e.target.value)}
                  placeholder="Share your expectations..."
                  rows={3}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="accredited"
                    checked={formData.accreditedInvestor}
                    onCheckedChange={(checked) => updateFormData("accreditedInvestor", checked)}
                  />
                  <Label htmlFor="accredited" className="text-sm">
                    I am an accredited investor (as defined by applicable securities laws)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => updateFormData("termsAccepted", checked)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy *
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" className="px-12">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
