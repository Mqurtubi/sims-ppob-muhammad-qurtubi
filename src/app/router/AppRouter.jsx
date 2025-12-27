import { Route, Routes } from "react-router-dom";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import DashboardLayout from "../../components/layout/DashboardLayout";
import HomePage from "../../features/home/pages/HomePage";
import TopupPage from "../../features/topup/pages/TopupPage";
import PaymentDetailPage from "../../features/payment/pages/PaymentDetailPage";
import TransactionPage from "../../features/transaction/pages/TransactionPage";
import AccountPage from "../../features/account/pages/AccountPage";
import ProtectedRoute from "./ProtectedRoute";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="topup" element={<TopupPage />} />
          <Route path="payment/:productCode" element={<PaymentDetailPage />} />
          <Route path="transaction" element={<TransactionPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
