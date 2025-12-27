import BalanceSummary from "../../../components/layout/BalanceSummary";
import useAccount from "../../../hooks/useAccount";
import { useParams } from "react-router-dom";
import usePaymentDetail from "../hooks/usePaymentDetail";
import PaymentDetailHeader from "../components/PaymentDetailHeader";
import PaymentDetailForm from "../components/PaymentDetailForm";
import { useState } from "react";
import { postBayarService } from "../api";
import ConfirmDialog from "../../../components/feedback/ConfirmDialog";
import ResultDialog from "../../../components/feedback/ResultDialog";
export default function PaymentDetailPage() {
  const {
    dataBalance,
    dataProfile,
    loading: loadingGlobal,
    refetchAccount,
  } = useAccount();
  const { productCode } = useParams();
  const { service, loading } = usePaymentDetail(productCode);
  const [dialogState, setDialogState] = useState({
    open: false,
    status: false,
    message: "",
  });
  const [openConfirm, setOpenConfirm] = useState(false);
  const closeDialog = () => {
    setDialogState((prev) => ({ ...prev, open: false }));
  };
  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setOpenConfirm(true);
  };
  const handleConfirmTopup = async () => {
    setOpenConfirm(false);
    try {
      await postBayarService(productCode);
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
  if (loading || loadingGlobal) return <p>loading...</p>;
  return (
    <div className="space-y-15">
      <BalanceSummary balance={dataBalance} profile={dataProfile} />
      <div className="px-20 space-y-10">
        <PaymentDetailHeader service={service} />
        <PaymentDetailForm
          nominal={service.service_tariff}
          onSubmit={handleSubmitPayment}
        />
      </div>
      <ConfirmDialog
        open={openConfirm}
        title={`Beli ${service.service_name} prabayar senilai`}
        description={Number(service.service_tariff)}
        confirmLabel="Ya, lanjutkan Bayar"
        cancelLabel="Batalkan"
        onConfirm={handleConfirmTopup}
        onCancel={() => setOpenConfirm(false)}
      />
      <ResultDialog
        open={dialogState.open}
        status={dialogState.status}
        message={dialogState.message}
        title={`Pembayaran ${service.service_name} prabayar sebesar`}
        amount={service.service_tariff}
        onClose={closeDialog}
        onPrimaryAction={closeDialog}
        primaryLabel="Kembali ke Beranda"
      />
    </div>
  );
}
