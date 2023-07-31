import React from "react";
import Image from "next/image";
import Toggle from "@/components/UI/Toggle";
import CheckedSvg from "@/components/UI/SvgIcons/CheckedSvg";
import LockSvg from "@/components/UI/SvgIcons/LockSvg";
import ButtonIcon from "@/components/Form/FormComponents/ButtonIcon";
import BuyAmountInput from "@/components/Form/FormComponents/BuyAmountInput";
import Link from "next/link";

const ProductDisplay = ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams);
  return (
    <div className="flex w-full h-screen ">
      <div className="w-full flex flex-col gap-y-12 justify-between text-white py-10 bg-secondary  lg:flex-row">
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
        <div className="lg:flex-[35%] flex-shrink flex flex-col gap-y-8 px-12 mb-16 lg:mb-4 ">
          <div className="flex justify-between">
            <h3 className="text-xl">Buy in Custom Amount</h3>

            <Toggle
              isChecked={Number(searchParams.can_custom) === 0 ? false : true}
            />
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

              <BuyAmountInput
                isFixedPrice={
                  Number(searchParams.can_custom) === 0 ? false : true
                }
              />
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
            <Link href={"/exchange/confirm-order"} className=" w-full">
              <button
                type="button"
                className="w-full rounded-xl bg-[#587BF2] relative text-sm px-2 py-2  flex justify-center items-center lg:py-3 lg:text-base hover:bg-[#4366d7]"
              >
                Buy The Gift Card
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
