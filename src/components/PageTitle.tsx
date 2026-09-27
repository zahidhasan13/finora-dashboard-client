"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/transactions": "Transactions",
  "/dashboard/wallets": "Wallets",
  "/dashboard/cards": "Cards",
  "/dashboard/payments": "Payments",
  "/dashboard/invoices": "Invoices",
  "/dashboard/analytics": "Analytics",
  "/dashboard/budgets": "Budgets",
  "/dashboard/notifications": "Notifications",
  "/dashboard/settings": "Settings",
  "/dashboard/users": "Users",
};

const PageTitle = () => {
  const pathname = usePathname();

  const title = pageTitles[pathname] || "Dashboard";

  return <h2 className="text-2xl font-bold">{title}</h2>;
};

export default PageTitle;
