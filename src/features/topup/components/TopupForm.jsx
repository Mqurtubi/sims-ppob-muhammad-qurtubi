import MoneyIcon from "@mui/icons-material/Money";
import Button from "@mui/material/Button";
import TextFieldForm from "../../../components/form/TextFieldForm";
import { parseIDR, formatIDR } from "../../../utils/currency";

const TOP_UP_OPTIONS = [10000, 20000, 50000, 100000, 250000, 500000];
const MIN_TOPUP = 1;

export default function TopupForm({
  nominal,
  error,
  onChange,
  onSelect,
  onSubmit,
}) {
  const isValid = nominal >= MIN_TOPUP;

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <TextFieldForm
          placeholder="Masukkan nominal top up"
          type="text"
          startIcon={<MoneyIcon />}
          value={formatIDR(nominal)}
          handlerChange={(e) => onChange(parseIDR(e.target.value))}
          error={error}
        />

        <Button
          type="submit"
          variant="contained"
          color="error"
          fullWidth
          disabled={!isValid}
          sx={{
            py: 1.5,
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          Top Up
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {TOP_UP_OPTIONS.map((item) => (
          <Button
            key={item}
            variant="outlined"
            color="inherit"
            onClick={() => onSelect(item)}
            sx={{ py: 1.5 }}
          >
            Rp{item.toLocaleString("id-ID")}
          </Button>
        ))}
      </div>
    </form>
  );
}
