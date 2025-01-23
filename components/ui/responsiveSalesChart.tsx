import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const ResponsiveSalesChart = ({
  data,
}: {
  data: { month: string; sales: number }[];
}) => (
  <ChartContainer
    className="h-[300px] w-full"
    config={{
      sales: {
        label: "Sales",
        color: "hsl(var(--chart-1))",
      },
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="month"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Line
          type="monotone"
          dataKey="sales"
          strokeWidth={2}
          stroke="hsl(var(--chart-1))"
          dot={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);
