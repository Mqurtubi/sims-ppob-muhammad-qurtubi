import { http } from "../../services/http";

const register = async (data) => {
  const registerResponse = await http.post("/registration", data);
  return registerResponse.data;
};

const login = async (data) => {
  const loginResponse = await http.post("/login", data);
  return loginResponse.data;
};
export { register, login };
