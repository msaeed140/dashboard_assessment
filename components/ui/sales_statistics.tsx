"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef } from "react"

interface SalesData {
  category: string
  percentage: number
  color: string
}

const salesData: SalesData[] = [
  { category: "Lighter", percentage: 39.11, color: "#ff3b30" },
  { category: "Bakery", percentage: 23.13, color: "#ff6259" },
  { category: "Snacks", percentage: 39.11, color: "#ff8882" },
  { category: "Hygiene", percentage: 23.13, color: "#ffb3b0" },
  { category: "Ice Cream", percentage: 23.13, color: "#ffd1cf" },
  { category: "Candy1", percentage: 28.02, color: "#ffa69f" },
  { category: "Noodles", percentage: 5.03, color: "#ffc8c4" },
  { category: "Toy", percentage: 28.02, color: "#ffb3b0" },
  { category: "Battery", percentage: 5.03, color: "#ffe5e4" },
  { category: "Herbal", percentage: 5.03, color: "#fff2f1" },
]

export default function SalesStatistics() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 200
    canvas.height = 200

    // Calculate total for percentages
    const total = salesData.reduce((sum, item) => sum + item.percentage, 0)

    // Draw pie chart
    let startAngle = 0
    salesData.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.percentage) / total

      ctx.beginPath()
      ctx.moveTo(100, 100)
      ctx.arc(100, 100, 100, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })
  }, [])

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-base font-normal text-gray-500">Statistics</CardTitle>
        <h2 className="text-xl font-semibold">Sales by Category</h2>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-[200px] h-[200px]">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {salesData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-gray-700">{item.category}</span>
              <span className="text-sm text-gray-500 ml-1">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

