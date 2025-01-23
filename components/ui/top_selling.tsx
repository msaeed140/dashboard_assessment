"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface Product {
  name: string
  value: number
  color: string
}

const data: Product[] = [
  { name: "Fuchsia sweet", value: 39.11, color: "#FF3B30" },
  { name: "Lusine Strawberry Cupcake", value: 28.02, color: "#FF453A" },
  { name: "Vanilla Croissant", value: 23.13, color: "#FF6961" },
  { name: "Zahra Donut", value: 5.03, color: "#FFA39E" },
  { name: "Sun cola", value: 39.11, color: "#FFCCC7" },
  { name: "LOV SESAME CANDY", value: 28.02, color: "#FF3B30" },
  { name: "Indomie Fried Noodles", value: 23.13, color: "#FF453A" },
  { name: "Chewing Gum Pellet", value: 5.03, color: "#FF6961" },
  { name: "Brix Chocolate", value: 23.13, color: "#FFA39E" },
  { name: "Mustaka Flavoured Coated", value: 5.03, color: "#FFCCC7" },
]

export default function StatisticsCard() {
  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-gray-500 text-lg">Statistics</h2>
          <h1 className="text-2xl font-bold text-gray-900">Top Selling Products</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-1">
            {data.map((product, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }} />
                <span className="text-gray-700 flex-1">{product.name}</span>
                <span className="text-gray-500">{product.value.toFixed(2)}%</span>
              </div>
            ))}
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={0} outerRadius="100%" paddingAngle={0} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Card>
  )
}

