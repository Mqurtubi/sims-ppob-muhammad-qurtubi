import { useEffect, useRef, useState } from "react";
import { getTransactionHistory } from "../api";

const LIMIT = 5;

export default function useTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const hasFetchedOnce = useRef(false);

  useEffect(() => {
    const fetchHistory = async () => {
      if (offset === 0 && hasFetchedOnce.current) return;
      hasFetchedOnce.current = true;
      setLoading(true);
      try {
        const data = await getTransactionHistory(offset, LIMIT);
        setTransactions((prev) => [...prev, ...data.records]);
        if (data.records.length < LIMIT) {
          setHasMore(false);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [offset]);

  return {
    dataTransaction: transactions,
    loading,
    hasMore,
    loadMore: () => setOffset((prev) => prev + LIMIT),
  };
}
