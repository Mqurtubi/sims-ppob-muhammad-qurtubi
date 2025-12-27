import TransactionEmpty from "./TransactionEmpty";
import TransactionList from "./TransactionList";

export default function TransactionSection({
  transactions,
  hasMore,
  onShowMore,
}) {
  if (transactions.length === 0) {
    return <TransactionEmpty />;
  }
  return (
    <div className="space-y-6 pb-6">
      <TransactionList transactions={transactions} />

      {hasMore && (
        <button
          onClick={onShowMore}
          className="block mx-auto text-red-500 font-medium hover:underline"
        >
          Show more
        </button>
      )}
    </div>
  );
}
