import { http } from "../../services/http";

const postTopup = async (data) => {
  const responseTopup = await http.post("/topup", { top_up_amount: data });
  return responseTopup.data;
};

export { postTopup };
