import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StockAlert {
  category: string
  available: number
  percentage: number
}

const stockAlerts: StockAlert[] = [
  { category: "Beverages", available: 10, percentage: -14 },
  { category: "Beverages", available: 10, percentage: -14 },
  { category: "Beverages", available: 10, percentage: -14 },
  { category: "Beverages", available: 10, percentage: -14 },
]

export default function LowStockAlerts() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <p className="text-sm text-muted-foreground">Statistics</p>
        <CardTitle className="text-xl font-semibold">Low Stock Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {stockAlerts.map((alert, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg border p-4 bg-background">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="text-sm">
                {alert.category} - stock available {alert.available}
              </span>
            </div>
            <span className="text-sm font-medium text-destructive">{alert.percentage}%</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
