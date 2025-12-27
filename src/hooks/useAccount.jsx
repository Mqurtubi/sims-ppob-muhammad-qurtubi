import { useEffect, useState } from "react";
import { getProfile, getBalance } from "../services/userService";
export default function useAccount() {
  const [dataProfile, setDataProfile] = useState({});
  const [dataBalance, setDataBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchAccount = async () => {
    setLoading(true);
    try {
      const [profileResponse, balanceRespone] = await Promise.all([
        getProfile(),
        getBalance(),
      ]);
      setDataProfile(profileResponse.data);
      setDataBalance(balanceRespone);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  return { dataProfile, dataBalance, loading, refetchAccount: fetchAccount };
}
