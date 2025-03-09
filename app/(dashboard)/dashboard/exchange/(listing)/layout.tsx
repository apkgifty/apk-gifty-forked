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
    dealBannerImageUrl:
      "https://s3-alpha-sig.figma.com/img/4a07/69fc/159dd35aa477865a416bd6d97b52be0a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j1HROnA-RT9CvmmflsO3pBkEfIxC-wgZRBIxE814Wp6tDwHhZlG9umxUrN9B94N2Do-ocT0vaAN7Fe2Ym9r2iqxiUj-QLF0wUIVPhGKcbAxFkIu7RJbESYQ61pE62xMDk~IJIrz~5OdjQrZVtTYN3y4OHcIESrRWYNwSFfq4ueLMiroud23hJ20idg4mPWcjH3YMkL7VeCnjEQ7itAVdQsh~68AkUOFgtO5Y0P58omehPKrsGnoSIum6RWwXRF~3wIq8DfGcK8yd-aW9t6Nw-lUzd-d36zj-AtzHVLSnFkYMA6pSnpxX25cFBoWT9ADz8FoMRGLrTgJHgnUY09Joew__",
    btnColor: "bg-[#107c10] hover:bg-[#0b4b0b]",
  },
  {
    dealName: "Playstation Deals",
    dealUrl: "/dashboard/exchange/deals?category=psn&currency=USD",
    dealImageUrl: "/images/psn.png",
    dealBannerImageUrl:
      "https://s3-alpha-sig.figma.com/img/84b3/d099/89ce74c84b0456f18351e27c6d5728d3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PPz8Vwhuu7kjp2pPv4oAqGbswEfNZAtPH6M90E82yPdYamVgymMczT2pFrWG-ZqK7PQwqXLrdpnaVTlCkwgk4RfgUP-z9KEIOUK7KhKWuFqiazXIlTQTriqn99JvOGUqu3-NOEzNz5bhwZA40jDzBRtC49vzYTHTsZZiXgmq9c6AzfwJpdLOcIDVU4Z1Hn3Uu9jfcV8oPuGloa5yHAdqE-Bn3IE~F1dKlT3vUU4lySQQh3ETc7i10I8rJu~WouIHsgtYEHBDerrHrQ0~4Y~r4QEbj-NGgv7px4DeqXs5ozTiVGOu45yNJiPMJ~AP-Vaxk-de7HgD0VGUdNZTpQxu7w__",
    btnColor: "bg-[#0070d1] hover:bg-[#004a9f]",
  },
  {
    dealName: "Nintendo Deals",
    dealUrl: "/dashboard/exchange/deals?category=nintendo&currency=USD",
    dealImageUrl: "/images/nintendo.png",
    dealBannerImageUrl:
      "https://s3-alpha-sig.figma.com/img/2c9d/0239/130073954f53dd4c3659f3828b715c30?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kaSoosFANLEIaHqAP5wdT58GdZ4MgSqPNhQJioNsPlm-rLkKmVfK0nAnD5CvJ0b9xu99Uttdj8Fjn~T5zFJEBKlDQDw1hSZ8ujz4xSzuSKuNd0omzsbyju3dDLO6vWlrI3ec6CjRAMCjy3e9JmiNl1DE7hy5TobSKGGgj1Dv6~hCAmdqPQagkQYtSN1Em0gb0f-8x5jK2Z4N9YjiLTz-bPsd5FaigMURgIvc-3SXufg4VbuJwQtTqiON0WdwpvcElJko1QIQGBT7KacfxZG0ZwFzr1xpzdj6zsFTCmnJeWAlwcFD8FRuU4nGeUpOdL-ftKpTIaG4Hb4TcgvAnYPFXg__",
    btnColor: "bg-[#e60012] hover:bg-[#a5000d]",
  },
  {
    dealName: "Daily Deals",
    dealUrl: "/dashboard/exchange/deals?category=daily&currency=USD",
    dealImageUrl: "/images/daily.png",
    dealBannerImageUrl:
      "https://s3-alpha-sig.figma.com/img/2c9d/0239/130073954f53dd4c3659f3828b715c30?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kaSoosFANLEIaHqAP5wdT58GdZ4MgSqPNhQJioNsPlm-rLkKmVfK0nAnD5CvJ0b9xu99Uttdj8Fjn~T5zFJEBKlDQDw1hSZ8ujz4xSzuSKuNd0omzsbyju3dDLO6vWlrI3ec6CjRAMCjy3e9JmiNl1DE7hy5TobSKGGgj1Dv6~hCAmdqPQagkQYtSN1Em0gb0f-8x5jK2Z4N9YjiLTz-bPsd5FaigMURgIvc-3SXufg4VbuJwQtTqiON0WdwpvcElJko1QIQGBT7KacfxZG0ZwFzr1xpzdj6zsFTCmnJeWAlwcFD8FRuU4nGeUpOdL-ftKpTIaG4Hb4TcgvAnYPFXg__",
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
  const router = useRouter();
  const pathname = usePathname();

  const isDeals = pathname.includes("deals");

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
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {deals.map((deal, index) => (
                <DealCard key={index} deal={deal} />
              ))}
            </div>
          </div>
        </section>
        <div className="w-full lg:max-w-[1150px] m-auto">
          {!isDeals && (
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
          )}
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
