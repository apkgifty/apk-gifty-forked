"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

import Lottie from "lottie-react";
import loadingAnimation from "@/components/Animations/Lottie/blueloading.json";

interface Props {
  paymentMethods: any;
  orderData: any;
  token: any;
}

const sendRequest = async (id: string) => {
  let data = JSON.stringify({ id });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "/api/notify-seller",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const ConfirmOrder: React.FC<Props> = ({
  paymentMethods,
  orderData,
  token,
}) => {
  const {
    price,
    description,
    quantity,
    id,
    instructions,
    status,
    notify_seller,
    processing_end_time,
  } = orderData;

  // Truncing price to show 0.00
  const fees = Math.trunc(0.01 * price * 100) / 100;

  // Check if order is completed
  const targetTime = new Date(processing_end_time).getTime();
  const currentTime = new Date().getTime();

  const paths = usePathname().split("/");

  const pathname = paths[paths.length - 1];

  console.log(paymentMethods);

  return (
    <>
      <div className="px-2 lg:px-10 w-full lg:w-full lg:overflow-y-auto">
        <div className="mt-10 pb-8 flex justify-between">
          <h3 className="text-sm lg:text-lg font-semibold">
            Confirm order information
          </h3>
        </div>
        <div className="flex gap-x-6">
          <p className="text-xs lg:text-base text-gray-400">
            Quantity
            <span className="text-white">:- {quantity}</span>
          </p>
          <p className="text-xs lg:text-base text-gray-400">
            Fees
            <span className="text-white">:- ${fees}</span>
          </p>
          <p className="text-xs lg:text-base text-gray-400">
            Amount To Pay <span className="text-white">:- ${price}</span>
          </p>
        </div>
        <div>Completed here!!!</div>
      </div>
    </>
  );
};

export default ConfirmOrder;
