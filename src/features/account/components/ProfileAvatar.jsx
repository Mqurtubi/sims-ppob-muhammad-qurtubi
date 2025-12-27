import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function ProfileAvatar({ profile, handleUpload }) {
  const avatarSrc =
    profile?.profile_image &&
    profile.profile_image !== "null" &&
    profile.profile_image !== ""
      ? profile.profile_image
      : "/Profile Photo.png";
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Avatar src={avatarSrc} sx={{ width: 96, height: 96 }} />
        <IconButton
          component="label"
          size="small"
          className="absolute bottom-8 left-19 bg-white shadow"
        >
          <EditIcon fontSize="small" />
          <input hidden type="file" accept="image/*" onChange={handleUpload} />
        </IconButton>
      </div>

      <h1 className="text-3xl font-semibold">
        {profile.first_name} {profile.last_name}
      </h1>
    </div>
  );
}
