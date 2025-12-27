import TextFieldForm from "../../../components/form/TextFieldForm";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
export default function ProfileView({
  profile,
  handleClickEdit,
  handleClickLogout,
}) {
  return (
    <div className="space-y-6">
      <TextFieldForm
        type="text"
        twoIcon="false"
        startIcon={<AlternateEmailOutlinedIcon />}
        value={profile.email}
        label={true}
        labelValue="Email"
      />
      <TextFieldForm
        type="text"
        twoIcon="false"
        startIcon={<PersonIcon />}
        value={profile.first_name}
        label={true}
        labelValue="Nama Depan"
      />
      <TextFieldForm
        type="text"
        twoIcon="false"
        startIcon={<PersonIcon />}
        value={profile.last_name}
        label={true}
        labelValue="Nama Belakang"
      />
      <Button
        variant="contained"
        color="error"
        fullWidth
        sx={{ marginBottom: "20px" }}
        onClick={handleClickEdit}
      >
        Edit Profile
      </Button>
      <Button
        variant="outlined"
        color="error"
        fullWidth
        onClick={handleClickLogout}
      >
        Logout
      </Button>
    </div>
  );
}
