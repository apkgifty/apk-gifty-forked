import Table from "@/components/Dashboard/Data/Table";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <div className="w-full bg-candlestick bg-left bg-contain bg-no-repeat py-6 px-4 bg-secondary border-b border-gray-800 flex flex-col gap-y-2 items-center justify-center text-white">
        <p className="text-lg font-semibold">
          Trade Gift Cards Easily - Buy and Sell Using Your Favorite Payment
          Methods
        </p>
        <p className="text-sm text-gray-400">
          Make p2p Tether USD trades today with Zero Fees and your Preferred
          Payment Method!
        </p>
      </div> */}
      <Table />
    </main>
  );
}
