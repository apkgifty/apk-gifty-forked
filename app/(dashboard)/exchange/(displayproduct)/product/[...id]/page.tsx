import React from "react";
import Image from "next/image";
import Toggle from "@/components/UI/Toggle";
import CheckedSvg from "@/components/UI/SvgIcons/CheckedSvg";
import LockSvg from "@/components/UI/SvgIcons/LockSvg";
import ButtonIcon from "@/components/Form/FormComponents/ButtonIcon";
import BuyAmountInput from "@/components/Form/FormComponents/BuyAmountInput";
import Link from "next/link";
import { cookies } from "next/headers";

import axios from "axios";
import BuyDisplay from "@/components/Dashboard/BuyDisplay";

const ProductDisplay = ({ searchParams }: { searchParams: any }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;
  console.log(searchParams);

  return (
    <div className="flex w-full  lg:h-screen ">
      <div className="w-full flex flex-col gap-y-12  justify-between text-white py-10 bg-secondary  lg:flex-row lg:h-full lg:gap-y-0">
        <div className="flex lg:flex-[65%]  flex-col gap-y-6 px-12">
          <div className="flex gap-x-3">
            <span className="px-3 py-1 bg-red-400 rounded-lg text-sm">
              Gift Cards
            </span>
            <span className="px-3 py-1 bg-green-400 rounded-lg text-sm">
              Popular
            </span>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              {searchParams.buy_header}
            </h4>
            <p className="text-base text-gray-500">
              {searchParams.buy_instructions}
            </p>
          </div>

          <div>
            <Image
              src={searchParams.image_url}
              alt="gifts image"
              width={650}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="lg:flex-[35%] flex-shrink flex flex-col gap-y-8 px-12 mb-16 lg:mb-0 ">
          <BuyDisplay
            canCustom={searchParams.can_custom}
            accessToken={accessToken}
            id={searchParams.id}
            price={searchParams.price}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
