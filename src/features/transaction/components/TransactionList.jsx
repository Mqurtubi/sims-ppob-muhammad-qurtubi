import TransactionCard from "./TransactionCard";
export default function TransactionList({ transactions }) {
  return (
    <div className="space-y-4">
      {transactions.map((item, index) => (
        <TransactionCard
          key={index}
          amount={item.total_amount}
          date={item.created_on}
          description={item.description}
          type={item.transaction_type}
        />
      ))}
    </div>
  );
}
