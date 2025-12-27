import FormRegister from "../components/FormRegister";
import ActionAlerts from "../../../components/feedback/ActionsAlert";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerSchema } from "../validations/registerSchema";
import { register } from "../api";
import AuthIllustration from "../components/AuthIllustration";
import AuthHeader from "../components/AuthHeader";

export default function RegisterPage() {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  });

  const [alertState, setAlertState] = useState({
    open: false,
    status: false,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataRegister((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const cleanField = () => {
    setDataRegister({
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = registerSchema.safeParse(dataRegister);
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
    try {
      setLoading(true);
      const registerResponse = await register(dataRegister);
      setAlertState({
        open: true,
        status: true,
        message: registerResponse.message,
      });
      setErrors({});
      cleanField();
    } catch (error) {
      setAlertState({
        open: true,
        status: false,
        message:
          error?.response?.data?.message ||
          "Terjadi kesalahan, silakan coba lagi",
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
                Lengkapi data untuk <br /> membuat akun
              </>
            }
          />
          <FormRegister
            dataRegister={dataRegister}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            loading={loading}
          />
          <p className="text-slate-600 text-sm">
            Sudah punya akun?{" "}
            <Link className="text-red-700 font-medium" to="/login">
              Login di sini
            </Link>
          </p>
          {alertState.open && (
            <ActionAlerts
              message={alertState.message}
              status={alertState.status}
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
