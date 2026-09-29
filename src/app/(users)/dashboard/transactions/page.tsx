"use client";

import TransactionsList from "@/components/Transactions/TransactionList";
import TransactionFilters from "@/components/Transactions/TransactionsFilter";
import { useState } from "react";

const TransactionsPage = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = () => {
    setSearch("");
    setType("");
    setStatus("");
  };

  const handleAddTransaction = () => {
    console.log("Open add transaction modal");
  };

  return (
    <div>
      <TransactionFilters
        search={search}
        type={type}
        status={status}
        onSearchChange={setSearch}
        onTypeChange={setType}
        onStatusChange={setStatus}
        onReset={handleReset}
        onAddTransaction={handleAddTransaction}
      />

      {/* Transaction Table */}
      <TransactionsList />
    </div>
  );
};

export default TransactionsPage;
