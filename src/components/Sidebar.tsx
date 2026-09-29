"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  Activity,
  X,
  LayoutDashboard,
  Receipt,
  Wallet,
  CreditCard,
  Send,
  FileText,
  BarChart2,
  PieChart,
  Bell,
  Settings,
  Users,
  Sparkles,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";

export type UserType = {
  name: string;
  email: string;
};

type SidebarProps = {
  user: UserType | null;
  logout: () => Promise<void>;
};

const navSections = [
  {
    title: "MAIN",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Transactions", href: "/dashboard/transactions", icon: Receipt },
      { name: "Wallets", href: "/dashboard/wallets", icon: Wallet },
      { name: "Cards", href: "/dashboard/cards", icon: CreditCard },
      { name: "Payments", href: "/dashboard/payments", icon: Send },
      { name: "Invoices", href: "/dashboard/invoices", icon: FileText },
      { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
      { name: "Budgets", href: "/dashboard/budgets", icon: PieChart },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        name: "Notifications",
        href: "/dashboard/notifications",
        icon: Bell,
        badge: 3,
      },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

const Sidebar = ({ user, logout }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();

    toast.success("Logout successful!");

    router.push("/login");
  };

  return (
    <aside className="w-64 min-h-full bg-[#0B1528] text-slate-300 p-4 flex flex-col justify-between font-sans">
      <div>
        {/* Logo & Close Button */}
        <div className="mb-6 flex items-center justify-between px-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 no-underline"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-md shadow-blue-500/30">
              <Activity className="h-5 w-5" />
            </span>
            <span className="text-2xl font-bold text-white tracking-wide">
              finora
            </span>
          </Link>
          <button className="text-slate-400 hover:text-white md:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {navSections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <p className="px-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {section.title}
              </p>
              <nav className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#1E293B] text-white font-semibold"
                          : "text-slate-400 hover:bg-[#132038] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 space-y-4">
        {/* Upgrade Card */}
        <div className="rounded-2xl border border-slate-800 bg-[#0F1C31] p-4 text-left">
          <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span>Upgrade to Pro</span>
          </div>
          <p className="text-xs text-slate-400 mb-3 leading-relaxed">
            Unlock exports, smart reports, and team controls.
          </p>
          <button className="w-full rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-500 active:scale-95">
            Explore Pro
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-800/60 px-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
            ZH
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-white truncate leading-tight">
              {user?.name}
            </p>
            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
          </div>
        </div>
        <div className="">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 rounded-lg w-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-900/50"
          >
            <span>Logout</span>
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
