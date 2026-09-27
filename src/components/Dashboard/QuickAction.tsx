import {
  ArrowDownLeft,
  Receipt,
  RefreshCcw,
  Send,
  Zap,
  ZapIcon,
} from "lucide-react";
import React from "react";

const QuickAction = () => {
  return (
    <div className="rounded-2xl bg-[#172944] p-6 text-white shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-200">
            Shortcuts
          </div>
          <h2 className="mt-1 text-xl font-bold">Quick Actions</h2>
        </div>
        <ZapIcon className="w-5 h-5 text-blue-300" />
      </div>
      {/* Action Button */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <button className="flex flex-col items-start gap-3 rounded-xl border border-[#314562] bg-[#203654] p-4 text-left transition hover:-translate-y-0.5 hover:bg-[#274263] cursor-pointer">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-200">
            <Send className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">Send money</span>
        </button>
        <button className="flex flex-col items-start gap-3 rounded-xl border border-[#314562] bg-[#203654] p-4 text-left transition hover:-translate-y-0.5 hover:bg-[#274263] cursor-pointer">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-200">
            <Receipt className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">Pay bills</span>
        </button>
        <button className="flex flex-col items-start gap-3 rounded-xl border border-[#314562] bg-[#203654] p-4 text-left transition hover:-translate-y-0.5 hover:bg-[#274263] cursor-pointer">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-200">
            <ArrowDownLeft className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">Add income</span>
        </button>
        <button className="flex flex-col items-start gap-3 rounded-xl border border-[#314562] bg-[#203654] p-4 text-left transition hover:-translate-y-0.5 hover:bg-[#274263] cursor-pointer">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-200">
            <RefreshCcw className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">Transfer</span>
        </button>
      </div>
    </div>
  );
};

export default QuickAction;
