import useHome from "../hooks/useHome";
import useAccount from "../../../hooks/useAccount";
import BalanceSummary from "../../../components/layout/BalanceSummary";
import ServiceMenu from "../components/ServiceMenu";
import Banner from "../components/Banner";
import { useEffect } from "react";
export default function HomePage() {
  const { dataService, dataBanner, loading } = useHome();
  const { dataBalance, dataProfile, loading: loadingGlobal } = useAccount();
  useEffect(() => {
    console.log(typeof dataBalance);
  }, [dataBalance]);
  if (loading || loadingGlobal) return <p>loading...</p>;

  return (
    <div className="space-y-15">
      <BalanceSummary balance={dataBalance} profile={dataProfile} />
      <ServiceMenu dataService={dataService} />
      <Banner dataBanner={dataBanner} />
    </div>
  );
}
