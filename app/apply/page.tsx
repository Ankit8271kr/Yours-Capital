"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Upload, CheckCircle } from "lucide-react"
import { useToast } from "@/components/toast-provider"
import { useRouter } from "next/navigation"

const steps = [
  { id: 1, title: "Company Info", description: "Basic company details" },
  { id: 2, title: "Business Model", description: "Your business approach" },
  { id: 3, title: "Financials", description: "Financial information" },
  { id: 4, title: "Team & Market", description: "Team and market details" },
  { id: 5, title: "Documents", description: "Upload required documents" },
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    companyName: "",
    website: "",
    industry: "",
    stage: "",
    location: "",
    foundedYear: "",

    // Step 2
    businessModel: "",
    targetMarket: "",
    revenueModel: "",
    competitiveAdvantage: "",

    // Step 3
    fundingAmount: "",
    currentRevenue: "",
    monthlyGrowth: "",
    previousFunding: "",

    // Step 4
    teamSize: "",
    founderExperience: "",
    marketSize: "",
    customerTraction: "",

    // Step 5
    pitchDeck: null,
    businessPlan: null,
    financials: null,
  })

  const { addToast } = useToast()
  const router = useRouter()

  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    addToast({
      type: "success",
      title: "Application Submitted!",
      description: "We'll review and contact you within 5 business days.",
    })

    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => updateFormData("website", e.target.value)}
                  placeholder="https://yourcompany.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fintech">Fintech</SelectItem>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="stage">Company Stage *</Label>
                <Select value={formData.stage} onValueChange={(value) => updateFormData("stage", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Idea Stage</SelectItem>
                    <SelectItem value="mvp">MVP</SelectItem>
                    <SelectItem value="early-revenue">Early Revenue</SelectItem>
                    <SelectItem value="growth">Growth Stage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => updateFormData("location", e.target.value)}
                  placeholder="City, Country"
                />
              </div>
              <div>
                <Label htmlFor="foundedYear">Founded Year *</Label>
                <Input
                  id="foundedYear"
                  type="number"
                  value={formData.foundedYear}
                  onChange={(e) => updateFormData("foundedYear", e.target.value)}
                  placeholder="2023"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="businessModel">Business Model *</Label>
              <Textarea
                id="businessModel"
                value={formData.businessModel}
                onChange={(e) => updateFormData("businessModel", e.target.value)}
                placeholder="Describe your business model in detail..."
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="targetMarket">Target Market *</Label>
              <Textarea
                id="targetMarket"
                value={formData.targetMarket}
                onChange={(e) => updateFormData("targetMarket", e.target.value)}
                placeholder="Who are your target customers?"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="revenueModel">Revenue Model *</Label>
                <Select value={formData.revenueModel} onValueChange={(value) => updateFormData("revenueModel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select revenue model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subscription">Subscription</SelectItem>
                    <SelectItem value="transaction">Transaction Fee</SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="advertising">Advertising</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="competitiveAdvantage">Competitive Advantage *</Label>
              <Textarea
                id="competitiveAdvantage"
                value={formData.competitiveAdvantage}
                onChange={(e) => updateFormData("competitiveAdvantage", e.target.value)}
                placeholder="What makes you different from competitors?"
                rows={3}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fundingAmount">Funding Amount Sought *</Label>
                <Select
                  value={formData.fundingAmount}
                  onValueChange={(value) => updateFormData("fundingAmount", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select amount" />
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
                <Label htmlFor="currentRevenue">Current Monthly Revenue</Label>
                <Input
                  id="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={(e) => updateFormData("currentRevenue", e.target.value)}
                  placeholder="$0"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="monthlyGrowth">Monthly Growth Rate</Label>
                <Input
                  id="monthlyGrowth"
                  value={formData.monthlyGrowth}
                  onChange={(e) => updateFormData("monthlyGrowth", e.target.value)}
                  placeholder="10%"
                />
              </div>
              <div>
                <Label htmlFor="previousFunding">Previous Funding</Label>
                <Input
                  id="previousFunding"
                  value={formData.previousFunding}
                  onChange={(e) => updateFormData("previousFunding", e.target.value)}
                  placeholder="$0 or amount raised"
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="teamSize">Team Size *</Label>
                <Select value={formData.teamSize} onValueChange={(value) => updateFormData("teamSize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 people</SelectItem>
                    <SelectItem value="6-10">6-10 people</SelectItem>
                    <SelectItem value="11-25">11-25 people</SelectItem>
                    <SelectItem value="25+">25+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="marketSize">Market Size</Label>
                <Input
                  id="marketSize"
                  value={formData.marketSize}
                  onChange={(e) => updateFormData("marketSize", e.target.value)}
                  placeholder="TAM/SAM size"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="founderExperience">Founder Experience *</Label>
              <Textarea
                id="founderExperience"
                value={formData.founderExperience}
                onChange={(e) => updateFormData("founderExperience", e.target.value)}
                placeholder="Brief background of key founders..."
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="customerTraction">Customer Traction</Label>
              <Textarea
                id="customerTraction"
                value={formData.customerTraction}
                onChange={(e) => updateFormData("customerTraction", e.target.value)}
                placeholder="Number of customers, key metrics, partnerships..."
                rows={3}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Upload Required Documents</h3>
              <p className="text-gray-600">Please upload the following documents to complete your application</p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Pitch Deck *</p>
                <p className="text-xs text-gray-500">PDF format, max 10MB</p>
                <Button variant="outline" className="mt-2 bg-transparent">
                  Choose File
                </Button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Business Plan</p>
                <p className="text-xs text-gray-500">PDF format, max 10MB</p>
                <Button variant="outline" className="mt-2 bg-transparent">
                  Choose File
                </Button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Financial Projections</p>
                <p className="text-xs text-gray-500">Excel or PDF format, max 5MB</p>
                <Button variant="outline" className="mt-2 bg-transparent">
                  Choose File
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions and privacy policy
              </Label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for Funding</h1>
          <p className="text-gray-600">Complete the application to get funding from Aamukh Capital</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps */}
        <div className="flex justify-between mb-8 overflow-x-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-center min-w-0 flex-1 ${
                step.id <= currentStep ? "text-indigo-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2 ${
                  step.id < currentStep
                    ? "bg-indigo-600 text-white"
                    : step.id === currentStep
                      ? "bg-indigo-100 text-indigo-600 border-2 border-indigo-600"
                      : "bg-gray-200 text-gray-400"
                }`}
              >
                {step.id < currentStep ? <CheckCircle className="w-4 h-4" /> : step.id}
              </div>
              <div className="text-center">
                <p className="text-xs font-medium">{step.title}</p>
                <p className="text-xs hidden sm:block">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderStep()}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep === steps.length ? (
                <Button onClick={handleSubmit} className="flex items-center gap-2">
                  Submit Application
                  <CheckCircle className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleNext} className="flex items-center gap-2">
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
