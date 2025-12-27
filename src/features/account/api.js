import { http } from "../../services/http";

const putProfileImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const responseProfileImage = await http.put("/profile/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return responseProfileImage.data;
};

const putProfile = async (data) => {
  const responseProfile = await http.put("/profile/update", data);
  return responseProfile.data;
};
export { putProfileImage, putProfile };
