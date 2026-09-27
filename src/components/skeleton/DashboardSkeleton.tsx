import React from "react";

export default function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen bg-slate-50 animate-pulse">
      {/* 1. Sidebar Skeleton */}
      <aside className="hidden md:flex w-64 min-h-screen bg-[#0B1528] p-4 flex-col justify-between shrink-0">
        <div className="space-y-6">
          {/* Logo Skeleton */}
          <div className="flex items-center gap-3 px-2 mb-6">
            <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>
            <div className="h-6 w-24 bg-slate-800 rounded-md"></div>
          </div>

          {/* Navigation Sections Skeleton */}
          {[1, 2, 3].map((section) => (
            <div key={section} className="space-y-3">
              <div className="h-3 w-12 bg-slate-800/80 rounded px-2"></div>
              <div className="space-y-1.5">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-9 w-full bg-slate-800/40 rounded-xl"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Profile Footer Skeleton */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
          <div className="h-9 w-9 bg-slate-800 rounded-full"></div>
          <div className="space-y-1.5 flex-1">
            <div className="h-3.5 w-24 bg-slate-800 rounded"></div>
            <div className="h-2.5 w-32 bg-slate-800/60 rounded"></div>
          </div>
        </div>
      </aside>

      {/* Main Content Skeleton Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 2. Navbar Skeleton */}
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="h-8 w-8 bg-slate-100 rounded-lg md:hidden"></div>
            <div className="h-10 w-full max-w-sm bg-slate-100 rounded-xl"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-28 bg-slate-100 rounded hidden md:block"></div>
            <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
            <div className="h-9 w-9 bg-slate-100 rounded-full"></div>
          </div>
        </header>

        {/* 3. Dashboard Body Skeleton */}
        <main className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Header / Greeting */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="h-8 w-64 bg-slate-200 rounded-lg"></div>
              <div className="h-4 w-80 bg-slate-200 rounded-md"></div>
            </div>
            <div className="h-5 w-32 bg-slate-200 rounded-md self-start sm:self-auto"></div>
          </div>

          {/* Top 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-5 bg-white border border-slate-100 rounded-2xl space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="h-3.5 w-24 bg-slate-200 rounded-sm"></div>
                  <div className="h-8 w-8 bg-slate-100 rounded-xl"></div>
                </div>
                <div className="h-7 w-32 bg-slate-200 rounded-md"></div>
                <div className="h-3 w-20 bg-slate-100 rounded-sm"></div>
              </div>
            ))}
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#0E1A2D] p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-3 w-20 bg-slate-700/60 rounded-xs"></div>
                  <div className="h-6 w-36 bg-slate-700 rounded-md"></div>
                </div>
                <div className="h-5 w-5 bg-slate-700/60 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-20 bg-[#16253D] rounded-xl p-3 flex flex-col justify-between"
                  >
                    <div className="h-7 w-7 bg-slate-700/70 rounded-lg"></div>
                    <div className="h-3.5 w-20 bg-slate-700/60 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4 shadow-xs">
              <div className="space-y-3">
                <div className="h-3.5 w-28 bg-slate-200 rounded-sm"></div>
                <div className="h-8 w-40 bg-slate-200 rounded-md"></div>
                <div className="h-3 w-36 bg-slate-100 rounded-sm"></div>
              </div>
              <div className="h-4 w-24 bg-slate-200 rounded-sm"></div>
            </div>
          </div>

          {/* Bottom Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 space-y-6 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-5 w-44 bg-slate-200 rounded-md"></div>
                  <div className="h-3 w-56 bg-slate-100 rounded-sm"></div>
                </div>
                <div className="h-8 w-20 bg-slate-100 rounded-xl"></div>
              </div>
              <div className="h-60 w-full bg-slate-50 rounded-xl flex items-end p-4 gap-3">
                <div className="w-full h-full bg-slate-100/70 rounded-lg"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4 shadow-xs">
              <div className="space-y-2">
                <div className="h-5 w-40 bg-slate-200 rounded-md"></div>
                <div className="h-3 w-28 bg-slate-100 rounded-sm"></div>
              </div>
              <div className="flex justify-center my-2">
                <div className="h-40 w-40 rounded-full border-[18px] border-slate-100"></div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-200"></div>
                    <div className="h-3 w-16 bg-slate-100 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
