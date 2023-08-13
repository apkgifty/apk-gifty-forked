"use client";

import React from "react";
import Image from "next/image";
import MainButton from "./MainButton";

const MidGiftBlocks = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-10 py-24 lg:gap-y-32 lg:pt-32 lg:pb-56 ">
      <div className="w-full flex flex-col items-center">
        <div className="relative bg-white  px-6 w-[90%] lg:px-12 lg:w-[700px] py-4 text-black rounded-full inline-flex  gap-x-2">
          <div className="flex flex-col">
            <p className="w-[110] lg:w-auto text-sm lg:text-2xl font-bold">
              Need Gift Cards?
            </p>
            <MainButton
              buttonText="BUY NOW"
              link="/dashboard/exchange/buy"
              className="text-xs lg:text-xl"
            />
          </div>
          <div className="absolute -top-12 -right-10 lg:-top-32 lg:-right-20">
            <div className="w-[170px] h-[170px]  lg:w-[320px] lg:h-[320px] relative">
              <Image src={"/images/cards.webp"} fill alt="gift card images" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="relative bg-white px-6 w-[90%] lg:px-12 lg:w-[700px] py-4 text-black rounded-full inline-flex justify-end gap-x-2">
          <div className="flex flex-col">
            <p className="w-[160px] lg:w-auto text-sm lg:text-2xl font-semibold">
              Need To Sell Your Gift Cards?
            </p>
            <MainButton
              buttonText="SELL NOW"
              link="/dashboard/exchange/buy"
              className="text-xs lg:text-xl"
            />
          </div>
          <div className="absolute -top-10 -left-12 lg:-top-32 lg:-left-20 ">
            <div className="w-[170px] h-[170px] lg:w-[320px] lg:h-[320px] relative ">
              <Image src={"/images/cards.webp"} fill alt="gift card images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidGiftBlocks;
