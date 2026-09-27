"use client";
import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import DashboardSkeleton from "@/components/skeleton/DashboardSkeleton";
import { usePathname } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  console.log(user);

  if (loading && pathname == "/dashboard") {
    return <DashboardSkeleton />;
  }
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Desktop view */}
      <div className="hidden md:block w-64 shrink-0">
        <Sidebar user={user} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Sticky Header Nav */}
        <Navbar user={user} />

        {/* Page Children Content */}
        <main className="flex-1 md:px-8 md:pt-9 md:pb-14 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
