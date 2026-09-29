"use client";

import { Plus, RotateCcw, Search } from "lucide-react";

interface TransactionFiltersProps {
  search: string;
  type: string;
  status: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
  onAddTransaction: () => void;
}

const TransactionFilters = ({
  search,
  type,
  status,
  onSearchChange,
  onTypeChange,
  onStatusChange,
  onReset,
  onAddTransaction,
}: TransactionFiltersProps) => {
  return (
    <section className="mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Add Transaction Button */}
        <button
          type="button"
          onClick={onAddTransaction}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95"
        >
          <Plus className="h-4 w-4" />
          <span>Add Transaction</span>
        </button>

        {/* Filters Group */}
        <div className="flex flex-1 flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:max-w-3xl sm:flex-row sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search transactions..."
              className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-9 pr-4 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:focus:bg-gray-900 dark:focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Type Filter */}
            <select
              value={type}
              onChange={(e) => onTypeChange(e.target.value)}
              className="h-10 rounded-lg border border-gray-200 bg-gray-50/50 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:focus:bg-gray-900"
            >
              <option value="">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            {/* Status Filter */}
            <select
              value={status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="h-10 rounded-lg border border-gray-200 bg-gray-50/50 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:focus:bg-gray-900"
            >
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>

            {/* Reset Button */}
            <button
              type="button"
              onClick={onReset}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50/50 px-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              title="Reset Filters"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionFilters;
