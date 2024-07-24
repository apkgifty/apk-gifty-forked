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
import SellDisplay from "@/components/Dashboard/SellDisplay";
import BuyInstructions from "@/components/Dashboard/BuyInstructions";
import SellInstructions from "@/components/Dashboard/SellInstructions";

const ProductDisplay = ({
  searchParams,
  params,
}: {
  searchParams: any;
  params: any;
}) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;
  const pageType = params.id[0];

  const { category, currency } = searchParams;

  // console.log(searchParams);

  return (
    <div className="flex w-full">
      <div className="w-full flex  flex-col gap-y-12  justify-between text-white py-10 bg-secondary  lg:flex-row  lg:gap-y-0  ">
        <div className="flex lg:flex-[65%]  flex-col gap-y-6 px-12">
          <div className="flex gap-x-3">
            <span className="px-3 py-1 bg-red-400 rounded-lg text-sm">
              {category === "Card"
                ? "Gift Cards"
                : category === "Bundle"
                ? "Data Bundles"
                : "Deposit"}
            </span>
            <span className="px-3 py-1 bg-green-400 rounded-lg text-sm">
              Popular
            </span>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Order Instructions</h4>
            {pageType === "buy" && <BuyInstructions type={category} />}
            {pageType == "sell" && <SellInstructions />}
          </div>

          <div className="w-full lg:w[75%] h-[450px] relative">
            <Image
              src={searchParams.image_url}
              alt="gifts image"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="lg:flex-[35%] pb-32 flex-shrink flex flex-col gap-y-8 px-12 mb-16 lg:mb-0 lg:pb-2 ">
          {pageType === "buy" && (
            <BuyDisplay
              canCustom={searchParams.can_custom}
              accessToken={accessToken}
              id={searchParams.id}
              price={searchParams.price}
              pageType={pageType}
              pid={searchParams.pid}
              stock={searchParams.quantity}
              category={category}
              currencySymbol={currency}
            />
          )}

          {pageType === "sell" && (
            <SellDisplay
              canCustom={searchParams.can_custom}
              accessToken={accessToken}
              id={searchParams.id}
              price={searchParams.price}
              pageType={pageType}
              pid={searchParams.pid}
              stock={searchParams.quantity}
              currencySymbol={currency}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
