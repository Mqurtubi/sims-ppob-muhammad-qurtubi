import { Link } from "react-router-dom";
import { useState } from "react";
import ActionAlerts from "../../../components/feedback/ActionsAlert";
import FormLogin from "../components/FormLogin";
import { loginSchema } from "../validations/loginSchema";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/authSlice";
import AuthIllustration from "../components/AuthIllustration";
import AuthHeader from "../components/AuthHeader";
export default function LoginPage() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [alertState, setAlertState] = useState({
    open: false,
    status: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDataLogin((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(dataLogin);
    if (!result.success) {
      const cleanError = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0];
        if (!cleanError[field]) {
          cleanError[field] = err.message;
        }
      });
      setErrors(cleanError);
      setAlertState({ open: false });
      return;
    }
    setLoading(true);
    try {
      const loginResponse = await login(dataLogin);
      dispatch(setLogin({ token: loginResponse.data.token }));
      navigate("/");
    } catch (error) {
      setAlertState({
        open: true,
        status: false,
        message: error?.response?.data?.message || "Gagal login",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-8 text-center">
          <AuthHeader
            title={
              <>
                Masuk atau buat akun <br /> untuk memulai
              </>
            }
          />
          <FormLogin
            dataLogin={dataLogin}
            handlerChange={handleChange}
            handlerSubmit={handleSubmit}
            errors={errors}
            loading={loading}
          />
          <p className="text-slate-600 text-sm">
            Belum punya akun?{" "}
            <Link className="text-red-700 font-medium" to="/register">
              Registrasi di sini
            </Link>
          </p>
          {alertState.open && (
            <ActionAlerts
              status={alertState.status}
              message={alertState.message}
              onClose={() =>
                setAlertState((prev) => ({ ...prev, open: false }))
              }
            />
          )}
        </div>
      </div>
      <AuthIllustration />
    </div>
  );
}
