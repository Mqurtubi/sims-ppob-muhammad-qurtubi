import { http } from "./http";

const getBalance = async () => {
  const balanceResponse = await http.get("/balance");
  return balanceResponse.data.data.balance;
};

const getProfile = async () => {
  const profileResponse = await http.get("/profile");
  return profileResponse.data;
};

export { getBalance, getProfile };
