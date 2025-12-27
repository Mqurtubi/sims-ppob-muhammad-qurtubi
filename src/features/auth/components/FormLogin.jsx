import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import TextFieldForm from "../../../components/form/TextFieldForm";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function FormLogin({
  dataLogin,
  handlerChange,
  handlerSubmit,
  errors,
  loading,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="w-full space-y-8" onSubmit={handlerSubmit}>
      <TextFieldForm
        placeholder="masukkan email anda"
        type="email"
        twoIcon={false}
        startIcon={<AlternateEmailOutlinedIcon />}
        name="email"
        value={dataLogin.email}
        handlerChange={handlerChange}
        error={errors.email}
      />
      <TextFieldForm
        placeholder="masukkan password anda"
        twoIcon={true}
        type={showPassword ? "text" : "password"}
        startIcon={<HttpsOutlinedIcon />}
        handleClick={() => setShowPassword(!showPassword)}
        endIcon={showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        name="password"
        value={dataLogin.password}
        handlerChange={handlerChange}
        error={errors.password}
      />
      <Button
        variant="contained"
        color="error"
        fullWidth
        type="submit"
        disabled={loading}
      >
        {loading ? "loading..." : "Masuk"}
      </Button>
    </form>
  );
}
