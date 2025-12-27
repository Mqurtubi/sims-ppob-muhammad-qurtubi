import TextFieldForm from "../../../components/form/TextFieldForm";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
export default function ProfileEditForm({
  profile,
  handlerSubmitEdit,
  handlerChange,
  handlerCancel,
  error,
}) {
  return (
    <form className="space-y-6" onSubmit={handlerSubmitEdit}>
      <TextFieldForm
        type="text"
        twoIcon={false}
        name="email"
        error={error.email}
        startIcon={<AlternateEmailOutlinedIcon />}
        value={profile.email}
        label={true}
        labelValue="Email"
        disabled={true}
      />
      <TextFieldForm
        type="text"
        twoIcon={false}
        name="first_name"
        handlerChange={handlerChange}
        error={error.first_name}
        startIcon={<PersonIcon />}
        value={profile.first_name}
        label={true}
        labelValue="Nama Depan"
      />
      <TextFieldForm
        type="text"
        twoIcon={false}
        name="last_name"
        handlerChange={handlerChange}
        error={error.last_name}
        startIcon={<PersonIcon />}
        value={profile.last_name}
        label={true}
        labelValue="Nama Belakang"
      />
      <Button
        variant="contained"
        color="error"
        fullWidth
        type="submit"
        sx={{ marginBottom: "20px" }}
      >
        Simpan
      </Button>
      <Button
        variant="outlined"
        color="error"
        fullWidth
        onClick={handlerCancel}
        sx={{ marginBottom: "20px" }}
      >
        Batalkan
      </Button>
    </form>
  );
}
