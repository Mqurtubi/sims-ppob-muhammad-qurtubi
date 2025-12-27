import { useEffect, useState } from "react";
import { getBanner, getService } from "../api";

export default function useHome() {
  const [dataService, setDataService] = useState([]);
  const [dataBanner, setDataBanner] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const [dataService, dataBanner] = await Promise.all([
          getService(),
          getBanner(),
        ]);
        setDataService(dataService.data);
        setDataBanner(dataBanner.data);
      } catch (error) {
        console.log(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  return { dataService, dataBanner, loading };
}
