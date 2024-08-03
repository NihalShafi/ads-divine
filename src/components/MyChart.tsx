'use client'
import { Area, AreaChart, Bar, BarChart, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltipContent } from "@/components/ui/chart"
import { ChartTooltip } from "./ui/chart"

export function MyChart() {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
      ]

    const chartConfig = {
        desktop: {
          label: "Sales",
          color: "#2563eb",
          
        },
        mobile: {
          label: "No Sales",
          color: "#60a5fa",
        },
      } satisfies ChartConfig
  return (
    <ChartContainer className="min-h-[200px] w-full" config={chartConfig}>
    <AreaChart accessibilityLayer
    data={chartData}
    margin={{
      left:12,
      right:12
    }}>

      <XAxis
      dataKey='month'
      tickLine={false}
      axisLine={false}
      tickMargin={8}
      tickFormatter={(value)=> value.slice(0,3)} />

      <Area dataKey='desktop'
      type='linear'
      fill="var(--color-desktop)"
      fillOpacity={0.0}
      stroke="var(--color-desktop)"/>
    </AreaChart>
    </ChartContainer>
  )
}
