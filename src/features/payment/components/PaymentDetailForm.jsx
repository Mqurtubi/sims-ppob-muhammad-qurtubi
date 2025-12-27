import MoneyIcon from "@mui/icons-material/Money";
import Button from "@mui/material/Button";
import TextFieldForm from "../../../components/form/TextFieldForm";
import { formatIDR } from "../../../utils/currency";

export default function PaymentDetailForm({ nominal, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="lg:col-span-2 space-y-6">
        <TextFieldForm
          placeholder="Masukkan nominal top up"
          type="text"
          startIcon={<MoneyIcon />}
          value={formatIDR(nominal)}
        />
        <Button
          type="submit"
          variant="contained"
          color="error"
          fullWidth
          sx={{
            py: 1.5,
          }}
        >
          Bayar
        </Button>
      </div>
    </form>
  );
}
