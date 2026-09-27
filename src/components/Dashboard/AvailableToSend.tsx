import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AvailableToSend = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl flex flex-col justify-between p-6">
      <div>
        <div className="text-[12px] font-semibold text-gray-400">
          Available to spend
        </div>
        <div className="mt-3 text-3xl font-bold">$18,861.50</div>
        <p className="mt-2 text-xs text-slate-500">
          Across 3 connected accounts
        </p>
      </div>
      <Link
        href="/wallets"
        className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-blue-600"
      >
        View wallets <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};

export default AvailableToSend;
