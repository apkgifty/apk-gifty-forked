import React from "react";
import Image from "next/image";
import Card from "@/components/Card/Card";
import Switch from "@/components/Form/FormComponents/Switch";
import FilterSelectOutline from "@/components/Filter/FilterSelectOutline";
import FilterRange from "@/components/Filter/FilterRange";
import NotificationListener from "@/components/Dashboard/Data/NotificationListener";

interface Props {
  children: React.ReactNode;
}
const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="px-2 mb-32  lg:mb:0">
        <Card className="bg-secondary justify-center items-center flex flex-col pb-8 w-full">
          <div>
            <Image
              src="/images/image 9.png"
              width={120}
              alt="gift card"
              height={150}
            />
          </div>
          <h3 className="text-2xl font-bold">Other Services</h3>
          <p className="text-sm text-gray-500">
            APKxchange.com, Trade anything anywhere with APKxchange.com!
          </p>
        </Card>
        <div className="w-full lg:max-w-[1150px] m-auto">
          <div className="flex gap-x-4 justify-end text-white mt-4"></div>
          <div className="pb-32 lg:pb-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default layout;
