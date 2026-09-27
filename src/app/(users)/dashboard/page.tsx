import AvailableToSend from "@/components/Dashboard/AvailableToSend";
import CurrentStats from "@/components/Dashboard/CurrentStats";
import Greeting from "@/components/Dashboard/Greeting";
import QuickAction from "@/components/Dashboard/QuickAction";
import RevenueChart from "@/components/Dashboard/RevenueChart";
import SpendingChart from "@/components/Dashboard/SpendingChart";

const DashboardPage = () => {
  return (
    <>
      <Greeting />
      <CurrentStats />
      <section className="mb-7 grid gap-5 xl:grid-cols-[1.4fr_.6fr]">
        <QuickAction />
        <AvailableToSend />
      </section>
      <section className="mb-7 grid gap-5 xl:grid-cols-[1.6fr_.8fr]">
        <RevenueChart />
        <SpendingChart />
      </section>
    </>
  );
};

export default DashboardPage;
