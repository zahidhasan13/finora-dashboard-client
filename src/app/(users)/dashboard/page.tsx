import AvailableToSend from "@/components/Dashboard/AvailableToSend";
import CurrentStats from "@/components/Dashboard/CurrentStats";
import Greeting from "@/components/Dashboard/Greeting";
import QuickAction from "@/components/Dashboard/QuickAction";

const DashboardPage = () => {
  return (
    <>
      <Greeting />
      <CurrentStats />
      <section className="mb-7 grid gap-5 xl:grid-cols-[1.4fr_.6fr]">
        <QuickAction />
        <AvailableToSend />
      </section>
    </>
  );
};

export default DashboardPage;
