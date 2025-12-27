import { useEffect, useState } from "react";

export default function useProfileForm(profile) {
  const [formEdit, setFormEdit] = useState({
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormEdit((prev) => ({ ...prev, [name]: value }));

    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    if (profile) {
      setFormEdit({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
      });
    }
    setError({});
  };

  useEffect(() => {
    if (profile) {
      setFormEdit({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
      });
      setError({});
    }
  }, [profile]);

  return {
    formEdit,
    setFormEdit,
    error,
    setError,
    handleChange,
    resetForm,
  };
}
