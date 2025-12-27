import { http } from "../../services/http";
const getService = async () => {
  const serviceResponse = await http.get("/services");
  return serviceResponse.data.data;
};

const postBayarService = async (service_code) => {
  const bayarServiceResponse = await http.post("/transaction", {
    service_code: service_code,
  });
  return bayarServiceResponse.data;
};
export { getService, postBayarService };
