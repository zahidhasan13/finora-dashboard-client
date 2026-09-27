import {
  ArrowDownLeft,
  ArrowUpRight,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import React from "react";

const CurrentStats = () => {
  return (
    <section className="mb-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* Card One */}
      <div className="bg-white p-4 border border-gray-200 rounded-2xl">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Total Balance
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Wallet className="h-4.25 w-4.25" />
          </span>
        </div>
        <div className="text-2xl font-bold">$23,681.50</div>
        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <TrendingUp className="w-3.25 h-3.25" />
          <span>+8.04%</span>
          <span className="font-normal text-slate-400">vs. last month</span>
        </div>
      </div>
      {/* Card Two */}
      <div className="bg-white p-4 border border-gray-200 rounded-2xl">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Monthly income
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <ArrowDownLeft className="h-4.25 w-4.25" />
          </span>
        </div>
        <div className="text-2xl font-bold">$12,450.00</div>
        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <TrendingUp className="w-3.25 h-3.25" />
          <span>+12.2%</span>
          <span className="font-normal text-slate-400">vs. last month</span>
        </div>
      </div>
      {/* Card Three */}
      <div className="bg-white p-4 border border-gray-200 rounded-2xl">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Monthly expenses
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500">
            <ArrowUpRight className="h-4.25 w-4.25" />
          </span>
        </div>
        <div className="text-2xl font-bold">$1,575.64</div>
        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-red-500">
          <TrendingDown className="w-3.25 h-3.25" />
          <span>-3.4%</span>
          <span className="font-normal text-slate-400">vs. last month</span>
        </div>
      </div>
      {/* Card Four */}
      <div className="bg-white p-4 border border-gray-200 rounded-2xl">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Savings
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <DollarSign className="h-4.25 w-4.25" />
          </span>
        </div>
        <div className="text-2xl font-bold">$22,105.86</div>
        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <TrendingUp className="w-3.25 h-3.25" />
          <span>+18.5%</span>
          <span className="font-normal text-slate-400">vs. last month</span>
        </div>
      </div>
    </section>
  );
};

export default CurrentStats;
