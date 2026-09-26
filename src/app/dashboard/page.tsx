"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  CreditCard,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  Settings,
  Plus,
  MoreVertical,
  DollarSign,
} from "lucide-react";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* 1. Sidebar Navigation */}
      <aside className="w-64 bg-slate-900/60 border-r border-slate-800/80 flex flex-col justify-between p-5 hidden md:flex">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 font-bold text-lg">
              F
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Finora
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "transactions", label: "Transactions", icon: ArrowUpRight },
              { id: "cards", label: "My Cards", icon: CreditCard },
              { id: "wallet", label: "Wallets", icon: Wallet },
              { id: "analytics", label: "Analytics", icon: TrendingUp },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-indigo-400" : "text-slate-400"}`}
                  />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card at bottom of sidebar */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-semibold text-sm">
              JD
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-slate-200 leading-tight">
                John Doe
              </p>
              <p className="text-xs text-slate-500">Pro Member</p>
            </div>
          </div>
          <button className="text-slate-500 hover:text-red-400 transition-colors p-1.5">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* 2. Top Header */}
        <header className="h-16 border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="relative w-72 hidden sm:block">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search transactions, cards..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full" />
            </button>

            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg shadow-indigo-600/20 transition-all">
              <Plus className="w-4 h-4" /> Send Money
            </button>
          </div>
        </header>

        {/* 3. Dashboard Body Content */}
        <main className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Welcome Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Dashboard Overview
              </h1>
              <p className="text-slate-400 text-xs mt-1">
                Here is what is happening with your accounts today.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
              <span>This Month</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </div>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1: Total Balance */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-900 border border-indigo-500/20 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Total Balance
                </span>
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  $45,230.50
                </h3>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  +12.5%
                </span>
              </div>
              <p className="text-xs text-slate-500">Updated 2 mins ago</p>
            </div>

            {/* Card 2: Total Income */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Monthly Income
                </span>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <ArrowDownLeft className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  $12,840.00
                </h3>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  +8.2%
                </span>
              </div>
              <p className="text-xs text-slate-500">vs $11,800 last month</p>
            </div>

            {/* Card 3: Total Expenses */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-xl space-y-3 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Monthly Expenses
                </span>
                <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  $3,410.20
                </h3>
                <span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                  -2.4%
                </span>
              </div>
              <p className="text-xs text-slate-500">vs $3,500 last month</p>
            </div>
          </div>

          {/* Analytics Chart & Card Preview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area Placeholder */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-white">
                    Cash Flow Analytics
                  </h2>
                  <p className="text-xs text-slate-400">
                    Income vs Expenses over time
                  </p>
                </div>
                <button className="text-slate-400 hover:text-white p-1">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Visual Bars Mockup */}
              <div className="h-52 w-full flex items-end justify-between gap-3 pt-6 px-2">
                {[
                  { month: "Jan", inc: 60, exp: 40 },
                  { month: "Feb", inc: 80, exp: 50 },
                  { month: "Mar", inc: 45, exp: 30 },
                  { month: "Apr", inc: 90, exp: 65 },
                  { month: "May", inc: 70, exp: 45 },
                  { month: "Jun", inc: 100, exp: 55 },
                ].map((bar, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                  >
                    <div className="w-full flex items-end justify-center gap-1.5 h-full">
                      <div
                        style={{ height: `${bar.inc}%` }}
                        className="w-3 bg-indigo-500 rounded-t-sm transition-all hover:bg-indigo-400"
                      />
                      <div
                        style={{ height: `${bar.exp}%` }}
                        className="w-3 bg-slate-700 rounded-t-sm transition-all hover:bg-slate-600"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Card Preview */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-white">
                  Primary Card
                </h2>
                <span className="text-xs text-indigo-400 font-medium cursor-pointer hover:underline">
                  Manage
                </span>
              </div>

              {/* Virtual Credit Card Component */}
              <div className="p-5 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-blue-600 text-white shadow-lg shadow-indigo-600/20 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider uppercase opacity-80">
                    Finora Platinum
                  </span>
                  <CreditCard className="w-5 h-5 opacity-80" />
                </div>

                <div>
                  <p className="text-xs opacity-70 mb-1">Card Number</p>
                  <p className="text-lg font-mono tracking-widest font-bold">
                    •••• •••• •••• 8842
                  </p>
                </div>

                <div className="flex justify-between items-end text-xs">
                  <div>
                    <p className="opacity-70 text-[10px] uppercase">
                      Card Holder
                    </p>
                    <p className="font-semibold">John Doe</p>
                  </div>
                  <div>
                    <p className="opacity-70 text-[10px] uppercase">Expires</p>
                    <p className="font-semibold">08/28</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Recent Transactions Table */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-white">
                  Recent Transactions
                </h2>
                <p className="text-xs text-slate-400">
                  Latest activity from your connected accounts
                </p>
              </div>
              <button className="text-xs text-indigo-400 font-medium hover:underline">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-800">
                  <tr>
                    <th className="pb-3 font-semibold">Transaction</th>
                    <th className="pb-3 font-semibold">Category</th>
                    <th className="pb-3 font-semibold">Date</th>
                    <th className="pb-3 font-semibold text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[
                    {
                      title: "GitHub Subscription",
                      cat: "Software",
                      date: "Today, 02:45 PM",
                      amount: "-$21.00",
                      isInc: false,
                    },
                    {
                      title: "Stripe Payout",
                      cat: "Income",
                      date: "Yesterday, 10:12 AM",
                      amount: "+$1,250.00",
                      isInc: true,
                    },
                    {
                      title: "AWS Cloud Hosting",
                      cat: "Infrastructure",
                      date: "Sep 24, 2026",
                      amount: "-$142.50",
                      isInc: false,
                    },
                    {
                      title: "Figma Pro Plan",
                      cat: "Design Tool",
                      date: "Sep 22, 2026",
                      amount: "-$15.00",
                      isInc: false,
                    },
                  ].map((tx, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-3.5 font-medium text-slate-200">
                        {tx.title}
                      </td>
                      <td className="py-3.5 text-slate-400">{tx.cat}</td>
                      <td className="py-3.5 text-slate-500">{tx.date}</td>
                      <td
                        className={`py-3.5 text-right font-semibold ${tx.isInc ? "text-emerald-400" : "text-slate-200"}`}
                      >
                        {tx.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
