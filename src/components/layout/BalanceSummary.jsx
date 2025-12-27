import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";

export default function BalanceSummary({ profile, balance }) {
  const [showSaldo, setShowSaldo] = useState(false);

  const avatarSrc =
    profile?.profile_image && !profile.profile_image.includes("null")
      ? profile.profile_image
      : "/Profile Photo.png";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 md:px-10 lg:px-20 py-10 items-center">
      <div className="space-y-4 md:space-y-5">
        <Avatar
          src={avatarSrc}
          sx={{ width: { xs: 60, md: 75 }, height: { xs: 60, md: 75 } }}
        />
        <div className="space-y-1">
          <p className="text-xl md:text-2xl text-gray-700">Selamat datang,</p>
          <h1 className="text-3xl md:text-4xl font-semibold wrap-break-words">
            {profile?.first_name} {profile?.last_name}
          </h1>
        </div>
      </div>

      <div className="bg-[url(/Background-Saldo.png)] bg-no-repeat bg-cover bg-center p-6 md:p-8 space-y-4 md:space-y-6 text-white rounded-xl shadow-lg w-full">
        <p className="text-base md:text-lg opacity-90">Saldo anda</p>

        <p className="text-3xl md:text-4xl font-semibold">
          Rp {showSaldo ? balance?.toLocaleString("id-ID") : "••••••••••"}
        </p>

        <div className="flex items-center gap-2 text-sm md:text-base">
          <span>{showSaldo ? "Tutup saldo" : "Lihat saldo"}</span>
          <IconButton
            size="small"
            aria-label="toggle saldo"
            onClick={() => setShowSaldo((prev) => !prev)}
          >
            {showSaldo ? (
              <VisibilityOffOutlinedIcon
                sx={{ color: "white", fontSize: 20 }}
              />
            ) : (
              <VisibilityOutlinedIcon sx={{ color: "white", fontSize: 20 }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
