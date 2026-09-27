"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Bills", value: 35, color: "#3B82F6" }, // Blue
  { name: "Food", value: 20, color: "#8B5CF6" }, // Purple
  { name: "Shopping", value: 25, color: "#F97316" }, // Orange
  { name: "Transport", value: 12, color: "#10B981" }, // Green
  { name: "Others", value: 8, color: "#EC4899" }, // Pink
];

export default function SpendingChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
      {/* Header */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">Spending categories</h3>
        <p className="text-xs text-gray-400 mt-0.5">$4,820 total spent</p>
      </div>

      {/* Donut Chart */}
      <div className="h-48 w-full relative my-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
              cornerRadius={6}
              isAnimationActive={true}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: any) => [`${value}%`, "Share"]}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Grid */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-2">
        {pieData.slice(0, 4).map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 text-xs text-gray-600 font-medium"
          >
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="truncate">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
