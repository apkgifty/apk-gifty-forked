import Image from "next/image";
import Card from "@/components/Card/Card";
import Switch from "@/components/Form/FormComponents/Switch";
import FilterSelectOutline from "@/components/Filter/FilterSelectOutline";
import FilterRange from "@/components/Filter/FilterRange";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-2">
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
        <FilterRange />
      </div>
      {children}
    </div>
  );
};

export default layout;
