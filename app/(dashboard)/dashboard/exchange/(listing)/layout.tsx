"use client";

import Image from "next/image";
import Card from "@/components/Card/Card";
import Switch from "@/components/Form/FormComponents/Switch";
import FilterSelectOutline from "@/components/Filter/FilterSelectOutline";
import { ToastContainer } from "react-toastify";
import FilterRange from "@/components/Filter/FilterRange";
import NotificationListener from "@/components/Dashboard/Data/NotificationListener";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import path from "path";
import DealCard from "@/components/Deals/DealCard";

interface Props {
  children: React.ReactNode;
}

const currencies: string[] = ["USD", "GHS", "CAD", "GBP", "EUR", "NGN"];

const deals = [
  {
    dealName: "Xbox Deals",
    dealUrl: "/dashboard/exchange/deals?category=xbox&currency=USD",
    dealImageUrl: "/images/xbox.png",
    btnColor: "bg-[#107c10] hover:bg-[#0b4b0b]",
  },
  {
    dealName: "Playstation Deals",
    dealUrl: "/dashboard/exchange/deals?category=psn&currency=USD",
    dealImageUrl: "/images/psn.png",
    btnColor: "bg-[#0070d1] hover:bg-[#004a9f]",
  },
  {
    dealName: "Nintendo Deals",
    dealUrl: "/dashboard/exchange/deals?category=nintendo&currency=USD",
    dealImageUrl: "/images/nintendo.png",
    btnColor: "bg-[#e60012] hover:bg-[#a5000d]",
  },
  {
    dealName: "Daily Deals",
    dealUrl: "/dashboard/exchange/deals?category=daily&currency=USD",
    dealImageUrl: "/images/daily.png",
    btnColor: "bg-[#0070d1] hover:bg-[#004a9f]",
  },
];

const giftCards: string[] = [
  "Playstation",
  "Amazon",
  "Steam",
  "Target",
  "Walmart",
  "ITunes",
  "Google Play",
  "Best Buy",
  "Target",
];

const layout: React.FC<Props> = ({ children }) => {
  // const router = useRouter();
  // const pathname = usePathname();

  // const isDeals = pathname.includes("deals");

  return (
    <>
      <div className="px-2 mb-32  lg:mb:0">
        {/* <Card className="bg-secondary justify-center items-center flex flex-col pb-8 w-full">
          <div>
            <Image
              src="/images/image 9.png"
              width={120}
              alt="gift card"
              height={150}
            />
          </div>
          <h3 className="text-2xl font-bold">Gift card collection</h3>
          <p className="text-sm text-gray-500">
            APKxchange.com, Trade anything anywhere with APKxchange.com!
          </p>
        </Card> */}
        {/* Hero Section with Gaming Deals */}
        <section
          className="py-8 bg-[#0a1030] bg-[url('/images/exploredeals.png')]"
          style={{ backgroundSize: "cover" }}
        >
          <div className="container max-w-5xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {deals.map((deal, index) => (
                <DealCard key={index} deal={deal} />
              ))}
            </div>
          </div>
        </section>
        <div className="w-full lg:max-w-[1150px] m-auto">
          <div className="w-full text-white flex justify-center mt-4">
            <Switch
              items={[
                {
                  label: "Buy Gift Cards",
                  url: "buy?currency=USD",
                  slug: "buy",
                },
                {
                  label: "Sell Gift Cards",
                  url: "sell?currency=USD",
                  slug: "sell",
                },
              ]}
              backgroundColor="bg-secondary"
            />
          </div>

          <div className="flex justify-center items-center gap-x-4 mt-3 py-6 border-b border-gray-700">
            {/* <span className="py-2 px-3 bg-secondary rounded-lg text-white text-xs hover:cursor-pointer">
            All Products
          </span>

          <span className="text-gray-500 text-xs hover:cursor-pointer">
            Amazon
          </span>
          <span className="text-gray-500 text-xs hover:cursor-pointer">
            ITunes
          </span>
          <span className="text-gray-500 text-xs hover:cursor-pointer">
            Walmart
          </span> */}
          </div>
          <div className="flex gap-x-4 justify-end text-white mt-4">
            {/* <FilterSelectOutline
              label="Category"
              options={["Shopping", "Food", "Clothing"]}
              filterType="category"
              border
              borderColor="border-gray-500"
            /> */}
            <FilterSelectOutline
              label="Currency"
              options={currencies}
              filterType="currencies"
              border
              borderColor="border-gray-500"
            />
            {/* <FilterSelectOutline
              label="Gift Cards"
              options={giftCards}
              filterType="giftCards"
              border
              borderColor="border-gray-500"
            /> */}
            {/* <FilterRange /> */}
          </div>
          <div className="pb-32 lg:pb-10">{children}</div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default layout;
