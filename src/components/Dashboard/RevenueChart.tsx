"use client";

import React from "react";
import { Download } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const areaData = [
  { month: "Apr", income: 8200 },
  { month: "May", income: 9400 },
  { month: "Jun", income: 10800 },
  { month: "Jul", income: 9800 },
  { month: "Aug", income: 11800 },
  { month: "Sep", income: 12400 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Revenue & expenses
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            A six-month view of your cash movement
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-all cursor-pointer">
          <Download className="h-3.5 w-3.5" />
          Export
        </button>
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={areaData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
              domain={[0, 14000]}
              ticks={[0, 3500, 7000, 10500, 14000]}
            />
            <Tooltip
              formatter={(value: any) => [
                `$${value.toLocaleString()}`,
                "Income",
              ]}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#3B82F6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#incomeGradient)"
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-4 text-xs font-medium text-gray-600">
        <span className="h-3 w-3 rounded-full bg-blue-500 inline-block"></span>
        <span>income</span>
      </div>
    </div>
  );
}
