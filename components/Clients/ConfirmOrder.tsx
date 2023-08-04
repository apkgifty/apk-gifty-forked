"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

import Countdown from "../Dashboard/DashUtils/Countdown";
import DisplayDialog from "../UI/Dialog/Dialog";
import Chat from "../Dashboard/DashUtils/Chat";
import axios from "axios";

interface Props {
  price: string;
  stopTime: string;
  status: string;
  id: string;
  token: string;
}

const sendRequest = async (id: string, accessToken: string) => {
  let data = JSON.stringify({});

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `https://backend.apkxchange.com/api/orders/${id}/notifyseller`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    // data: data,
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
  price,
  stopTime,
  status,
  id,
  token,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const [statuss, setStatuss] = useState(status);
  const [stop, setStop] = useState(stopTime);

  const handleSubmit = async () => {
    console.log(token);
    const res = await sendRequest(id, token);
    console.log(res.data);
    setStatuss(res.data.status);
    setStop(res.data.processing_end_time);
  };

  return (
    <>
      <div className="px-2 lg:px-10 w-full lg:w-[60%]">
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
            Quantity
            <span className="text-white">:- $399</span>
          </p>
          <p className="text-xs lg:text-base text-gray-400">
            Amount To Pay <span className="text-white">:- ${price}</span>
          </p>
        </div>

        <div className="mt-14">
          <h4 className="text-sm lg:text-lg font-semibold">
            Payment Instructions{" "}
          </h4>
          <ul className="list-disc space-y-2 mt-6 px-8">
            {/* <li>{data.data.instructions}</li> */}
            {/* <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </li> */}
          </ul>
        </div>
        <div className="mt-12">
          <p className="text-sm lg:text-base">
            After Transfering the amount, click on the Transfered button
          </p>
        </div>
        <div className="mt-8 space-y-4 flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0">
          <button
            className="w-full text-sm px-4 py-2 bg-[#7995f5] rounded-lg lg:w-auto disabled:bg-gray-700 disabled:cursor-not-allowed "
            onClick={handleSubmit}
            disabled={statuss.toString() === "1"}
          >
            Paid, Notify Seller
          </button>
          <button className="w-full text-sm px-4 py-2 lg:w-auto">
            Cancel Transfer
          </button>
        </div>

        <div className="mt-10 flex items-center gap-x-4">
          <p>Payment time:</p>
          <Countdown
            stopTime={stop}
            // action={runAction}
          />
        </div>

        {/* <div className="flex mt-10 flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 ">
      <button className="w-full flex justify-center items-center gap-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm">
        <HeadphoneSvg />
        Help center
      </button>
      <button className="w-full flex justify-center items-center gap-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm">
        <InfoSvg />
        Report
      </button>
      <button className="w-full flex justify-center items-center gap-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm">
        <EyeSvg />
        Track Transaction
      </button>
    </div> */}
      </div>
      <Chat status={statuss} />
      <DisplayDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        title="Order Instructions"
        buttonText="Close"
      >
        <ol className="list-decimal pl-2 space-y-4 text-gray-700">
          <li>
            Remember every trade that occurs on our platform attracts a fee of
            1% on every amount. All trades less than $100 will attract a $1 fee
            on it.
          </li>
          <li>
            Before you proceed Kindly make sure you’ve read through our Trade
            Guidelines before proceeding.
          </li>
          <li>
            The card or the code of your order will be uploaded in the chat
            section of this trade. Make sure to use the card within the
            timeframe provided for you.
          </li>
        </ol>
      </DisplayDialog>
    </>
  );
};

export default ConfirmOrder;
