import Image from "next/image";
import Card from "@/components/Card/Card";
import Switch from "@/components/Form/FormComponents/Switch";
import FilterSelectOutline from "@/components/Filter/FilterSelectOutline";
import FilterRange from "@/components/Filter/FilterRange";

// import Image from "next/image";
import Toggle from "@/components/UI/Toggle";
import CheckedSvg from "@/components/UI/SvgIcons/CheckedSvg";
import LockSvg from "@/components/UI/SvgIcons/LockSvg";
import ButtonIcon from "@/components/Form/FormComponents/ButtonIcon";
import BuyAmountInput from "@/components/Form/FormComponents/BuyAmountInput";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-2">
      <div className="w-full flex flex-col gap-y-12 justify-between text-white py-10 bg-secondary  lg:flex-row">
        <div className="flex flex-2  flex-col gap-y-6 px-12">
          <div className="flex gap-x-3">
            <span className="px-3 py-1 bg-red-400 rounded-lg text-sm">
              Gift Cards
            </span>
            <span className="px-3 py-1 bg-green-400 rounded-lg text-sm">
              Popular
            </span>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Buy Amazon Gift Cards</h4>
            <p className="text-base text-gray-500">
              Guidance that will help you in dealing with best out of all the
              Gift Cards available in market
            </p>
          </div>

          <div>
            <Image
              src={"/images/image 20.png"}
              alt="gifts image"
              width={650}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1 flex-shrink flex flex-col gap-y-8 px-12 mb-16 lg:mb-4">
          <div className="flex justify-between">
            <h3 className="text-xl">Buy in Custom Amount</h3>

            <Toggle />
          </div>

          <hr className="border-t border-gray-600 "></hr>

          <div className="px-6 py-6 border-2 border-gray-600 rounded-lg space-y-2">
            <div className="w-full  flex gap-x-2">
              <div className="">
                <CheckedSvg />
              </div>

              <p>Get all knowledge how to deal in gift cards</p>
            </div>
            <div className="w-full  flex gap-x-2">
              <div>
                <CheckedSvg />
              </div>

              <p>Best trading techniques</p>
            </div>
            <div className="flex gap-x-2">
              <div>
                <CheckedSvg />
              </div>
              <p>Increase Profits</p>
            </div>
          </div>

          <div className="px-12 py-8 bg-[#23262F] rounded-xl  text-center space-y-6">
            <div>
              <p className="font-light">You Will Get Gift Card Value</p>

              <BuyAmountInput />
            </div>
            <div>
              <p className="font-light">You have to pay</p>
              <p className="text-3xl font-semibold text-[#587BF2]">$299</p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="p-3 rounded-full border border-gray-600">
              <LockSvg />
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-[#587BF2] relative text-sm px-2 py-2  flex justify-center items-center lg:py-3 lg:text-base hover:bg-[#4366d7]"
            >
              Buy The Gift Card
            </button>
          </div>
        </div>
      </div>
      <Card className="bg-secondary justify-center items-center flex flex-col pb-8 w-full">
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
          APKexchange.com, Trade anything anywhere with APKexchange.com!
        </p>
      </Card>
      <div className="w-full lg:max-w-[1150px] m-auto">
        <div className="w-full text-white flex justify-center mt-4">
          <Switch
            items={[
              { label: "Buy Gift Cards", url: "buy" },
              { label: "Sell Gift Cards", url: "sell" },
            ]}
            backgroundColor="bg-secondary"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 mt-3 py-6 border-b border-gray-700">
          <span className="py-2 px-3 bg-secondary rounded-lg text-white text-xs hover:cursor-pointer">
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
          </span>
        </div>
        <div className="flex gap-x-4 justify-center text-white mt-4">
          <FilterSelectOutline
            label="Category"
            options={["Shopping", "Food", "Clothing"]}
            border
            borderColor="border-gray-500"
          />
          <FilterSelectOutline
            label="Tags"
            options={["GiftCards", "Food", "Clothing"]}
            border
            borderColor="border-gray-500"
          />
          <FilterSelectOutline
            label="Gift Cards"
            options={["GiftCards", "Food", "Clothing"]}
            border
            borderColor="border-gray-500"
          />
          {/* <FilterRange /> */}
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
