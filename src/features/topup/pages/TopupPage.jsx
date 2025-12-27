import BalanceSummary from "../../../components/layout/BalanceSummary";
import useAccount from "../../../hooks/useAccount";
import ResultDialog from "../../../components/feedback/ResultDialog";
import { useState } from "react";
import { topupSchema } from "../validations/topupSchema";
import { postTopup } from "../api";
import ConfirmDialog from "../../../components/feedback/ConfirmDialog";
import TopupForm from "../components/TopupForm";
import TopupHeader from "../components/TopupHeader";
export default function TopupPage() {
  const {
    dataProfile,
    dataBalance,
    loading: loadingGlobal,
    refetchAccount,
  } = useAccount();
  const [nominal, setNominal] = useState(0);
  const [dialogState, setDialogState] = useState({
    open: false,
    status: false,
    message: "",
  });
  const [openConfirm, setOpenConfirm] = useState(false);
  const [error, setError] = useState("");

  const closeDialog = () => {
    setDialogState((prev) => ({ ...prev, open: false }));
    setNominal(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = topupSchema.safeParse({ nominal });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setOpenConfirm(true);
    setError("");
  };
  const handleConfirmTopup = async () => {
    setOpenConfirm(false);
    try {
      await postTopup(nominal);
      await refetchAccount();
      setDialogState({
        open: true,
        status: true,
        message: "Berhasil!",
      });
    } catch (error) {
      setDialogState({
        open: true,
        status: false,
        message: "Gagal!",
      });
      console.error(error);
    }
  };
  if (loadingGlobal) return <p>loading...</p>;
  return (
    <div className="space-y-15">
      <BalanceSummary balance={dataBalance} profile={dataProfile} />
      <div className="px-20 space-y-10">
        <TopupHeader />
        <TopupForm
          nominal={nominal}
          error={error}
          onChange={(value) => {
            setNominal(value);
            if (error) setError("");
          }}
          onSelect={(value) => {
            setNominal(value);
            if (error) setError("");
          }}
          onSubmit={handleSubmit}
        />
      </div>
      <ConfirmDialog
        open={openConfirm}
        title="Anda yakin untuk Top Up sebesar"
        description={nominal}
        confirmLabel="Ya, lanjutkan Top Up"
        cancelLabel="Batalkan"
        onConfirm={handleConfirmTopup}
        onCancel={() => setOpenConfirm(false)}
      />
      <ResultDialog
        open={dialogState.open}
        status={dialogState.status}
        message={dialogState.message}
        title="Top up sebesar"
        amount={nominal}
        onClose={closeDialog}
        onPrimaryAction={closeDialog}
        primaryLabel="Kembali ke Beranda"
      />
    </div>
  );
}
