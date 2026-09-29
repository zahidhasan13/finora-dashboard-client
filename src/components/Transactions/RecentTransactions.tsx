"use client";
import Link from "next/link";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useTransactions } from "@/context/TransactionContext";
const RecentTransactions = () => {
  const { transactions, loading, error } = useTransactions(); // Only show latest 6 transactions

  const recentTransactions = transactions.slice(0, 6);
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Recent transactions
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your latest account activity
          </p>
        </div>
        <Link
          href="/dashboard/transactions"
          className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          View all
        </Link>
      </div>
      {/* Loading */}
      {loading && (
        <div className="p-6 text-center text-sm text-gray-500">
          Loading transactions...
        </div>
      )}
      {/* Error */}
      {!loading && error && (
        <div className="p-6 text-center text-sm text-red-500"> {error} </div>
      )}
      {/* Empty */}
      {!loading && !error && recentTransactions.length === 0 && (
        <div className="p-6 text-center text-sm text-gray-500">
          No transactions found.
        </div>
      )}
      {/* Transaction List */}
      {!loading && !error && recentTransactions.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <tr>
                <th className="py-4 pl-6 pr-4">DATE</th>
                <th className="px-4 py-4"> DESCRIPTION </th>
                <th className="px-4 py-4"> CATEGORY </th>
                <th className="px-4 py-4"> AMOUNT </th>
                <th className="py-4 pl-4 pr-6"> STATUS </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {recentTransactions.map((tx) => (
                <tr
                  key={tx._id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50"
                >
                  {/* Date */}
                  <td className="whitespace-nowrap py-4 pl-6 pr-4 text-gray-500 dark:text-gray-400">
                    {new Date(tx.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  {/* Description */}
                  <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${tx.type === "income" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400" : "bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"}`}
                      >
                        {tx.type === "income" ? (
                          <ArrowDownLeft className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </div>
                      <span> {tx.description || tx.category} </span>
                    </div>
                  </td>
                  {/* Category */}
                  <td className="whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400">
                    {tx.category}
                  </td>
                  {/* Amount */}
                  <td
                    className={`whitespace-nowrap px-4 py-4 font-semibold ${tx.type === "income" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}
                  >
                    {tx.type === "income" ? "+" : "-"}$
                    {tx.amount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  {/* Status */}
                  <td className="whitespace-nowrap py-4 pl-4 pr-6">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold capitalize text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default RecentTransactions;
