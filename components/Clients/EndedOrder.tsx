"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

import Countdown from "../Dashboard/DashUtils/Countdown";
import DisplayDialog from "../UI/Dialog/Dialog";
import Chat from "../Dashboard/DashUtils/Chat";
import Lottie from "lottie-react";
import loadingAnimation from "@/components/Animations/Lottie/blueloading.json";

interface Props {
  orderData: any;
}

const EndedOrder: React.FC<Props> = ({ orderData }) => {
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

  const [openDialog, setOpenDialog] = useState(false);

  //   const [statuss, setStatuss] = useState(status);
  //   const [stop, setStop] = useState(processing_end_time);

  const [loading, setLoading] = useState<boolean>(false);

  // Truncing price to show 0.00
  const fees = Math.trunc(0.01 * price * 100) / 100;

  const paths = usePathname().split("/");

  const pathname = paths[paths.length - 1];

  return (
    <>
      <div className="px-2 lg:px-10 w-full lg:w-[60%] lg:overflow-y-auto">
        <div className="mt-10 pb-8 flex justify-between">
          <h3 className="text-sm lg:text-lg font-semibold">
            Confirm order information
          </h3>
          <p
            className=" text-sm lg:text-base cursor-pointer text-red-400"
            onClick={() => setOpenDialog(true)}
          >
            Read order info
          </p>
        </div>
        <div className="flex gap-x-6">
          <p className="text-xs lg:text-base text-gray-400">
            {pathname === "buy"
              ? "Quantity"
              : pathname === "sell"
              ? "Value "
              : null}
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
      </div>
      {/* <DisplayDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        title="Order Instructions"
        buttonText="Close"
      >

      </DisplayDialog> */}
    </>
  );
};

export default EndedOrder;
