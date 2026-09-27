"use client";

import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import Link from "next/link";

export type UserType = {
  name: string;
  email: string;
};

type SidebarProps = {
  user: UserType | null;
};

const Navbar = ({ user }: SidebarProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6">
      {/* Left side: Hamburger menu & Search input */}
      <div className="flex items-center gap-3 md:gap-4 flex-1">
        <button
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors sm:hidden"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden sm:block relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions, invoices, or anything..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Right side: Workspace, Notifications & User profile */}
      <div className="flex items-center gap-4 md:gap-6">
        <span className="hidden text-sm font-medium text-slate-500 md:inline-block">
          Demo workspace
        </span>

        {/* Notification Bell */}
        <Link
          href={"/dashboard/notifications"}
          className="relative p-1 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </Link>

        {/* User Profile */}
        <Link
          href={"/dashboard/settings"}
          className="flex items-center gap-2.5 rounded-full p-1 hover:bg-gray-100 transition-colors"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
            {user?.name[0]}
          </div>
          <span className="hidden text-sm font-semibold text-gray-800 md:inline-block">
            {user?.name}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
