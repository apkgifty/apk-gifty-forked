import React from "react";
import Image from "next/image";
import { Switch } from "@mui/material";
import Toggle from "@/components/UI/Toggle";
import CheckedSvg from "@/components/UI/SvgIcons/CheckedSvg";
import LockSvg from "@/components/UI/SvgIcons/LockSvg";
import ButtonIcon from "@/components/Form/FormComponents/ButtonIcon";
import BuyAmountInput from "@/components/Form/FormComponents/BuyAmountInput";

const ProductDisplay = () => {
  return (
    <div className="w-full flex flex-col gap-y-12 justify-between text-white py-10 bg-secondary lg:flex-row">
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
            Guidance that will help you in dealing with best out of all the Gift
            Cards available in market
          </p>
        </div>

        <div>
          {/* <div className="w-[500px] h-[350px] rounded-lg"> */}
          <Image
            src={"/images/image 20.png"}
            alt="gifts image"
            width={650}
            height={300}
            className="rounded-lg"
          />

          {/* </div> */}
        </div>
      </div>
      <div className="flex-1 flex-shrink flex flex-col gap-y-8 px-12">
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
            {/* <p className="text-3xl font-semibold">$399</p> */}
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
  );
};

export default ProductDisplay;
