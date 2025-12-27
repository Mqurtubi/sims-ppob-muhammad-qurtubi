import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PersonIcon from "@mui/icons-material/Person";
import TextFieldForm from "../../../components/form/TextFieldForm";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function FormRegister({
  dataRegister,
  handleChange,
  handleSubmit,
  errors,
  loading,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <form className="w-full space-y-8" onSubmit={handleSubmit}>
      <TextFieldForm
        placeholder="masukkan email anda"
        type="text"
        twoIcon={false}
        name="email"
        startIcon={
          <AlternateEmailOutlinedIcon color={errors.email ? "error" : ""} />
        }
        value={dataRegister.email}
        handlerChange={handleChange}
        error={errors.email}
      />
      <TextFieldForm
        placeholder="nama depan"
        type="text"
        twoIcon={false}
        name="first_name"
        startIcon={<PersonIcon color={errors.first_name ? "error" : ""} />}
        value={dataRegister.first_name}
        handlerChange={handleChange}
        error={errors.first_name}
      />
      <TextFieldForm
        placeholder="nama belakang"
        type="text"
        twoIcon={false}
        name="last_name"
        startIcon={<PersonIcon color={errors.last_name ? "error" : ""} />}
        value={dataRegister.last_name}
        handlerChange={handleChange}
        error={errors.last_name}
      />
      <TextFieldForm
        placeholder="buat password"
        twoIcon={true}
        type={showPassword ? "text" : "password"}
        name="password"
        startIcon={<HttpsOutlinedIcon color={errors.password ? "error" : ""} />}
        handleClick={() => setShowPassword(!showPassword)}
        endIcon={showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        value={dataRegister.password}
        handlerChange={handleChange}
        error={errors.password}
      />
      <TextFieldForm
        placeholder="konfirmasi password"
        twoIcon={true}
        name="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        startIcon={
          <HttpsOutlinedIcon color={errors.confirmPassword ? "error" : ""} />
        }
        handleClick={() => setShowConfirmPassword(!showConfirmPassword)}
        endIcon={
          showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
        }
        value={dataRegister.confirmPassword}
        handlerChange={handleChange}
        error={errors.confirmPassword}
      />
      <Button
        variant="contained"
        color="error"
        fullWidth
        type="submit"
        disabled={loading}
      >
        {loading ? "loading..." : "Registrasi"}
      </Button>
    </form>
  );
}
