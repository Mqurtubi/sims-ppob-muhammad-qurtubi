import { http } from "../../services/http";

const getBanner = async () => {
  const bannerResponse = await http.get("/banner");
  return bannerResponse.data;
};

const getService = async () => {
  const serviceResponse = await http.get("/services");
  return serviceResponse.data;
};

export { getBanner, getService };
