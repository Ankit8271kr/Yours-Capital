"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Building, Award } from "lucide-react"
import { useEffect, useState } from "react"

interface StatItem {
  icon: React.ReactNode
  value: string
  label: string
  description: string
  color: string
}

export function PortfolioStats() {
  const [animatedValues, setAnimatedValues] = useState({
    companies: 0,
    valuation: 0,
    exits: 0,
    unicorns: 0,
  })

  const stats: StatItem[] = [
    {
      icon: <Building className="w-8 h-8" />,
      value: "150+",
      label: "Portfolio Companies",
      description: "Active investments across sectors",
      color: "text-blue-600",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$50B+",
      label: "Total Valuation",
      description: "Combined portfolio value",
      color: "text-green-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "25",
      label: "Successful Exits",
      description: "IPOs and acquisitions",
      color: "text-purple-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "12",
      label: "Unicorns",
      description: "$1B+ valued companies",
      color: "text-orange-600",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        companies: 150,
        valuation: 50,
        exits: 25,
        unicorns: 12,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className={`${stat.color} mb-4 flex justify-center`}>{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
