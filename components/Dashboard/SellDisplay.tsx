"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";

import CheckedSvg from "@/components/UI/SvgIcons/CheckedSvg";
import Toggle from "@/components/UI/Toggle";
import BuyAmountInput from "../Form/FormComponents/BuyAmountInput";
import LockSvg from "@/components/UI/SvgIcons/LockSvg";
import BasicSelect from "../Form/FormComponents/BasicSelect";
import ConfirmationSelect from "../Form/FormComponents/ConfirmationSelect";
import FilterSelectOutline from "../Filter/FilterSelectOutline";

interface Props {
  canCustom: string;
  id: string;
  price: string;
  accessToken: string | undefined;
  pageType: string;
  pid: string;
  stock: string;
}

const SellDisplay: React.FC<Props> = ({
  canCustom,
  id,
  accessToken,
  price,
  pageType,
  pid,
  stock,
}) => {
  const router = useRouter();

  const paths = usePathname().split("/");

  const pathname = paths[paths.length - 1];

  const sellHandler = async (amount: string) => {
    const data = {
      price: amount,
      product_id: pid,
      type: "sellorder",
    };
    const config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "/api/order",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: JSON.stringify(data),
    };
    try {
      const response = await axios(config);
      // console.log(response.data);
      router.push(
        `/dashboard/transaction/order/${pathname}?pid=${response.data.data.id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [amount, setAmount] = useState("");

  const handleAmount = (e: any) => {
    const val = e.target.value;
    setAmount(val);
  };
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-xl">Sell in Custom Amount</h3>

        <Toggle isChecked={Number(canCustom) === 0 ? false : true} />
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
        <p className="font-semibold">Put your desired amount here</p>
        <p className="font-light">You will pay in Gift Card</p>
        <div>
          <BuyAmountInput
            isFixedPrice={Number(canCustom) === 0 ? false : true}
            handleAmount={handleAmount}
            amount={amount}
          />
        </div>
        <div>
          <p className="font-light">You will get cash value</p>
          <p className="text-3xl font-semibold text-[#587BF2]">
            ${(Number(amount) * Number(price)).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex gap-x-3 items-center">
        <div className="p-3 rounded-full border border-gray-600">
          <LockSvg />
        </div>
        {/* <Link href={"/exchange/confirm-order"} className=" w-full"> */}
        <button
          disabled={Number(stock) < 1}
          onClick={() => {
            sellHandler(amount);
          }}
          type="button"
          className="w-full rounded-xl bg-[#587BF2] relative text-sm px-2 py-2  flex justify-center items-center lg:py-3 lg:text-base hover:bg-[#4366d7] disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Sell Gift Card
        </button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default SellDisplay;
