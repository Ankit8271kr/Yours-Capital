"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, TrendingUp } from "lucide-react"

export function InvestmentCalculator() {
  const [investment, setInvestment] = useState("")
  const [timeHorizon, setTimeHorizon] = useState("")
  const [riskLevel, setRiskLevel] = useState("")
  const [results, setResults] = useState<any>(null)

  const calculateReturns = () => {
    if (!investment || !timeHorizon || !riskLevel) return

    const principal = Number.parseFloat(investment)
    const years = Number.parseInt(timeHorizon)

    let annualReturn = 0
    switch (riskLevel) {
      case "conservative":
        annualReturn = 0.12 // 12%
        break
      case "moderate":
        annualReturn = 0.18 // 18%
        break
      case "aggressive":
        annualReturn = 0.25 // 25%
        break
    }

    const futureValue = principal * Math.pow(1 + annualReturn, years)
    const totalReturn = futureValue - principal
    const roi = (totalReturn / principal) * 100

    setResults({
      futureValue: futureValue.toLocaleString("en-US", { style: "currency", currency: "USD" }),
      totalReturn: totalReturn.toLocaleString("en-US", { style: "currency", currency: "USD" }),
      roi: roi.toFixed(1),
      annualReturn: (annualReturn * 100).toFixed(1),
    })
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-semibold">Investment Calculator</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Investment Amount (USD)</label>
            <Input
              type="number"
              placeholder="100000"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Horizon</label>
            <Select value={timeHorizon} onValueChange={setTimeHorizon}>
              <SelectTrigger>
                <SelectValue placeholder="Select time horizon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 years</SelectItem>
                <SelectItem value="5">5 years</SelectItem>
                <SelectItem value="7">7 years</SelectItem>
                <SelectItem value="10">10 years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Risk Level</label>
            <Select value={riskLevel} onValueChange={setRiskLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select risk level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conservative">Conservative (12% annual)</SelectItem>
                <SelectItem value="moderate">Moderate (18% annual)</SelectItem>
                <SelectItem value="aggressive">Aggressive (25% annual)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateReturns} className="w-full bg-indigo-600 hover:bg-indigo-700">
            Calculate Returns
          </Button>

          {results && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="font-medium text-gray-900">Projected Returns</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Future Value:</span>
                  <span className="font-semibold">{results.futureValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Return:</span>
                  <span className="font-semibold text-green-600">{results.totalReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI:</span>
                  <span className="font-semibold">{results.roi}%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                *Projections based on historical performance. Past results don't guarantee future returns.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
