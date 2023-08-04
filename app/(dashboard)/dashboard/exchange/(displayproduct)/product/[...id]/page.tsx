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

  return (
    <div
      className="flex w-full  
     "
    >
      <div className="w-full flex  flex-col gap-y-12  justify-between text-white py-10 bg-secondary  lg:flex-row  lg:gap-y-0  ">
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
            <h4 className="text-2xl font-semibold">Order Instructions</h4>
            <p className="text-base text-gray-400 py-4">
              Before Proceeding to buy/sell your Gift Card or Other Payment
              methods, Follow These Intructions;
            </p>
            <ol className="list-decimal pl-10 space-y-4 text-gray-400">
              <li>
                Remember every trade that occurs on our platform attracts a fee
                of 1% on every amount. All trades less than $100 will attract a
                $1 fee on it.
              </li>
              <li>
                Before you proceed Kindly make sure you’ve read through our
                Trade Guidelines before proceeding.
              </li>
              <li>
                The card or the code of your order will be uploaded in the chat
                section of the this trade. Make sure to use the card within the
                timeframe provided for you.
              </li>
            </ol>
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
            pageType={pageType}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
