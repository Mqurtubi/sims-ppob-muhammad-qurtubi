import { useEffect, useState } from "react";
import { getService } from "../api";

export default function usePaymentDetail(serviceCode) {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!serviceCode) return;

    const fetchService = async () => {
      setLoading(true);
      setError(null);

      try {
        const services = await getService();
        const selectedService = services.find(
          (item) => item.service_code === serviceCode
        );
        setService(selectedService);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceCode]);

  return { service, loading, error };
}
