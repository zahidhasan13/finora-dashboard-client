"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface Transaction {
  _id: string;
  accountId: {
    _id: string;
    name: string;
    type: string;
    currency: string;
  };
  type: "income" | "expense";
  amount: number;
  category: string;
  description?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface TransactionContextType {
  transactions: Transaction[];
  pagination: Pagination | null;
  loading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined,
);

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "http://localhost:5000/api/v1/transactions",
        {
          credentials: "include",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch transactions");
      }

      setTransactions(result.data);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);

      setError(
        error instanceof Error ? error.message : "Failed to fetch transactions",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        pagination,
        loading,
        error,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("useTransactions must be used inside TransactionProvider");
  }

  return context;
};
