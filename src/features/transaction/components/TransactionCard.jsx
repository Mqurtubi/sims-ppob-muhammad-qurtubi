import { formatDateID } from "../../../utils/formatDate";
export default function TransactionCard({ amount, date, description, type }) {
  return (
    <div className="flex items-center justify-between border border-slate-300 rounded-lg px-6 py-4 bg-white">
      <div>
        <p
          className={`text-lg font-semibold ${
            type === "TOPUP" ? "text-green-500" : "text-red-500"
          }`}
        >
          {type === "TOPUP" ? "+" : "-"} Rp
          {Math.abs(amount).toLocaleString("id-ID")}
        </p>
        <p className="text-xs text-gray-400 mt-1">{formatDateID(date)}</p>
      </div>
      <p className="text-sm text-gray-500">
        {description} {type === "TOPUP" ? "" : ""}
      </p>
    </div>
  );
}
