import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useAccount from "../../../hooks/useAccount";
import useProfileForm from "../hooks/useProfileForm";

import ProfileAvatar from "../components/ProfileAvatar";
import ProfileView from "../components/ProfileView";
import ProfileEditForm from "../components/ProfileEditForm";
import ActionAlerts from "../../../components/feedback/ActionsAlert";

import { putProfile, putProfileImage } from "../api";
import {
  profileSchema,
  profileImageSchema,
} from "../validations/profileEditSchema";

import { setLogout } from "../../auth/store/authSlice";

export default function AccountPage() {
  const { dataProfile, refetchAccount, loading } = useAccount();
  const { formEdit, error, setError, handleChange, resetForm } =
    useProfileForm(dataProfile);

  const [isEdit, setIsEdit] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    status: false,
    message: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };

  const handleUploadFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const validation = profileImageSchema.safeParse({ file });
    if (!validation.success) {
      return setAlertState({
        open: true,
        status: false,
        message: validation.error.issues[0].message,
      });
    }

    try {
      await putProfileImage(file);
      await refetchAccount();
      setAlertState({
        open: true,
        status: true,
        message: "Berhasil update avatar profile",
      });
    } catch (err) {
      setAlertState({
        open: true,
        status: false,
        message: err.response?.data?.message || "Upload gagal",
      });
    }
  };

  const handlerSubmitEdit = async (e) => {
    e.preventDefault();

    const validation = profileSchema.safeParse(formEdit);
    if (!validation.success) {
      const fieldErrors = {};

      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        fieldErrors[fieldName] = issue.message;
      });

      setError(fieldErrors);
      return;
    }

    try {
      await putProfile(formEdit);
      await refetchAccount();
      resetForm();
      setIsEdit(false);
      setAlertState({
        open: true,
        status: true,
        message: "Profil berhasil diperbarui",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Gagal update profil");
    }
  };

  if (loading) return <p>loading...</p>;

  return (
    <div className="space-y-12 px-6 md:px-20 my-10">
      <div className="max-w-xl mx-auto space-y-8">
        <ProfileAvatar profile={dataProfile} handleUpload={handleUploadFile} />

        {isEdit ? (
          <ProfileEditForm
            profile={{ ...dataProfile, ...formEdit }}
            handlerChange={handleChange}
            handlerSubmitEdit={handlerSubmitEdit}
            handlerCancel={() => {
              setIsEdit(false);
              resetForm();
            }}
            error={error}
          />
        ) : (
          <ProfileView
            profile={dataProfile}
            handleClickEdit={() => setIsEdit(true)}
            handleClickLogout={handleLogout}
          />
        )}

        {alertState.open && (
          <ActionAlerts
            status={alertState.status}
            message={alertState.message}
            onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
          />
        )}
      </div>
    </div>
  );
}
