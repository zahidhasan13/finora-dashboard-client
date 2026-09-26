"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

import { useAuth } from "@/context/AuthContext";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const router = useRouter();

  const { user, loading, isAuthenticated, logout } = useAuth();

  // Protect dashboard
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [loading, isAuthenticated, router]);

  // Logout
  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <p className="text-slate-400">Loading dashboard...</p>
      </div>
    );
  }

  // Don't render dashboard if user isn't authenticated
  if (!isAuthenticated || !user) {
    return null;
  }

  // User initials
  const initials = user.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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
              {
                id: "overview",
                label: "Overview",
                icon: LayoutDashboard,
              },
              {
                id: "transactions",
                label: "Transactions",
                icon: ArrowUpRight,
              },
              {
                id: "cards",
                label: "My Cards",
                icon: CreditCard,
              },
              {
                id: "wallet",
                label: "Wallets",
                icon: Wallet,
              },
              {
                id: "analytics",
                label: "Analytics",
                icon: TrendingUp,
              },
              {
                id: "settings",
                label: "Settings",
                icon: Settings,
              },
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
                    className={`w-4 h-4 ${
                      isActive ? "text-indigo-400" : "text-slate-400"
                    }`}
                  />

                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Dynamic Initials */}
            <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-semibold text-sm">
              {initials}
            </div>

            <div className="text-left">
              {/* Dynamic Name */}
              <p className="text-sm font-medium text-slate-200 leading-tight">
                {user.name}
              </p>

              {/* Dynamic Role */}
              <p className="text-xs text-slate-500 capitalize">
                {user.name} account
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="text-slate-500 hover:text-red-400 transition-colors p-1.5"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header */}
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
              <Plus className="w-4 h-4" />
              Send Money
            </button>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Welcome Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Dashboard Overview
              </h1>

              <p className="text-slate-400 text-xs mt-1">
                Welcome back, {user.name}. Here is what is happening with your
                accounts today.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
              <span>This Month</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </div>
          </div>

          {/* এখান থেকে তোমার বাকি dashboard design */}
          {/* Stat Cards */}
          {/* Analytics */}
          {/* Primary Card */}
          {/* Recent Transactions */}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
