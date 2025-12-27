import { http } from "../../services/http";

const getTransactionHistory = async (offset, limit) => {
  const responseTransactionHistory = await http.get("/transaction/history", {
    params: {
      offset: offset,
      limit: limit,
    },
  });
  return responseTransactionHistory.data.data;
};

export { getTransactionHistory };
