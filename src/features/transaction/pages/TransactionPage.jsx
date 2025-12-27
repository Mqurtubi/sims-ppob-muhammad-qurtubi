import useAccount from "../../../hooks/useAccount";
import useTransaction from "../hooks/useTransaction";
import BalanceSummary from "../../../components/layout/BalanceSummary";
import TransactionSection from "../components/TransactionSection";
import { useEffect } from "react";

export default function TransactionPage() {
  const { dataBalance, dataProfile, loading: loadingGlobal } = useAccount();
  const { dataTransaction, loading, hasMore, loadMore } = useTransaction();
  useEffect(() => {
    console.log(dataTransaction);
  }, [dataTransaction]);
  if (loading || loadingGlobal) return <p>loading...</p>;

  return (
    <div className="space-y-15">
      <BalanceSummary balance={dataBalance} profile={dataProfile} />

      <div className="px-20 space-y-10">
        <p className="text-xl font-semibold">Semua Transaksi</p>
        <TransactionSection
          transactions={dataTransaction}
          hasMore={hasMore}
          onShowMore={loadMore}
        />
      </div>
    </div>
  );
}
