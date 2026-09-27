"use client";

import { useAuth } from "@/context/AuthContext";
import { Calendar } from "lucide-react";
import moment from "moment";
import React from "react";

const Greeting = () => {
  const { user } = useAuth();
  const date = moment().format("MMMM DD, YYYY");

  return (
    <section className="mb-6 md:mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Text Section */}
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
          Welcome Back, {user?.name || "User"}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Here's what's happening with your finances today.
        </p>
      </div>

      {/* Date Badge Section */}
      <div className="flex items-center gap-2 self-start sm:self-auto rounded-lg bg-white border border-slate-200/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-xs">
        <Calendar className="h-3.5 w-3.5 text-slate-400" />
        <span>{date}</span>
      </div>
    </section>
  );
};

export default Greeting;
