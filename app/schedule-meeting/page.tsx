"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Video, MapPin } from "lucide-react"
import { useToast } from "@/components/toast-provider"
import { useRouter } from "next/navigation"

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
]

const meetingTypes = [
  { value: "funding", label: "Funding Discussion", duration: "45 min", icon: "💰" },
  { value: "investor", label: "Investor Onboarding", duration: "30 min", icon: "🤝" },
  { value: "portfolio", label: "Portfolio Review", duration: "60 min", icon: "📊" },
  { value: "partnership", label: "Partnership Discussion", duration: "30 min", icon: "🤝" },
  { value: "consultation", label: "General Consultation", duration: "30 min", icon: "💬" },
]

export default function ScheduleMeetingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    meetingType: "",
    date: "",
    time: "",
    meetingMode: "",
    agenda: "",
    additionalInfo: "",
  })

  const { addToast } = useToast()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addToast({
      type: "success",
      title: "Meeting Scheduled!",
      description: "Calendar invite sent to your email.",
    })

    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const selectedMeetingType = meetingTypes.find((type) => type.value === formData.meetingType)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule a Meeting</h1>
          <p className="text-gray-600">
            Book a meeting with our investment team to discuss your startup or investment opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Meeting Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  Meeting Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <div>
                    <div className="font-medium text-gray-900">Duration</div>
                    <div className="text-sm text-gray-600">{selectedMeetingType?.duration || "30-60 minutes"}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Video className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Meeting Options</div>
                    <div className="text-sm text-gray-600">Video call or In-person</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Who You'll Meet</div>
                    <div className="text-sm text-gray-600">Investment team member</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">What to Prepare</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pitch deck (if applicable)</li>
                    <li>• Business plan summary</li>
                    <li>• Financial projections</li>
                    <li>• Team information</li>
                    <li>• Market analysis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Book Your Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Startup Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => updateFormData("company", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Meeting Details */}
                  <div>
                    <Label htmlFor="meetingType">Meeting Type *</Label>
                    <Select
                      value={formData.meetingType}
                      onValueChange={(value) => updateFormData("meetingType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        {meetingTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">
                              <span>{type.icon}</span>
                              <span>{type.label}</span>
                              <span className="text-gray-500">({type.duration})</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateFormData("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => updateFormData("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="meetingMode">Meeting Mode *</Label>
                    <Select
                      value={formData.meetingMode}
                      onValueChange={(value) => updateFormData("meetingMode", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select meeting mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            Video Call (Google Meet/Zoom)
                          </div>
                        </SelectItem>
                        <SelectItem value="in-person">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            In-Person (Mumbai Office)
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="agenda">Meeting Agenda *</Label>
                    <Textarea
                      id="agenda"
                      value={formData.agenda}
                      onChange={(e) => updateFormData("agenda", e.target.value)}
                      placeholder="Please describe what you'd like to discuss in this meeting..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                      placeholder="Any additional information or special requirements..."
                      rows={2}
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> We'll send you a calendar invite within 24 hours of your request. If your
                      preferred time isn't available, we'll suggest alternative slots.
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Schedule Meeting
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
