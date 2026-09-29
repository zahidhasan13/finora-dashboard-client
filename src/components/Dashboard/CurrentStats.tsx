"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";

interface DashboardData {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
}

const CurrentStats = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardSummary = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/dashboard/summary",
          {
            credentials: "include",
          },
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        setDashboardData(result.data);
      } catch (error) {
        console.error("Failed to fetch dashboard summary:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardSummary();
  }, []);

  if (loading) {
    return (
      <section className="mb-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-35 animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
          />
        ))}
      </section>
    );
  }

  const totalBalance = dashboardData?.totalBalance ?? 0;
  const totalIncome = dashboardData?.totalIncome ?? 0;
  const totalExpense = dashboardData?.totalExpense ?? 0;

  const savings = totalIncome - totalExpense;

  return (
    <section className="mb-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* Total Balance */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Total Balance
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Wallet className="h-4.25 w-4.25" />
          </span>
        </div>

        <div className="text-2xl font-bold">
          ${totalBalance.toLocaleString()}
        </div>

        <div className="mt-2 flex items-center gap-1 text-xs font-normal text-slate-400">
          Current balance across your accounts
        </div>
      </div>

      {/* Total Income */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Total Income
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <ArrowDownLeft className="h-4.25 w-4.25" />
          </span>
        </div>

        <div className="text-2xl font-bold">
          ${totalIncome.toLocaleString()}
        </div>

        <div className="mt-2 flex items-center gap-1 text-xs font-normal text-slate-400">
          Total income from transactions
        </div>
      </div>

      {/* Total Expense */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Total Expenses
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500">
            <ArrowUpRight className="h-4.25 w-4.25" />
          </span>
        </div>

        <div className="text-2xl font-bold">
          ${totalExpense.toLocaleString()}
        </div>

        <div className="mt-2 flex items-center gap-1 text-xs font-normal text-slate-400">
          Total expenses from transactions
        </div>
      </div>

      {/* Savings */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-400">
            Net Savings
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <DollarSign className="h-4.25 w-4.25" />
          </span>
        </div>

        <div className="text-2xl font-bold">${savings.toLocaleString()}</div>

        <div
          className={`mt-2 flex items-center gap-1 text-xs font-semibold ${
            savings >= 0 ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {savings >= 0 ? (
            <TrendingUp className="h-3.25 w-3.25" />
          ) : (
            <TrendingDown className="h-3.25 w-3.25" />
          )}

          <span>{savings >= 0 ? "Positive" : "Negative"}</span>
        </div>
      </div>
    </section>
  );
};

export default CurrentStats;
