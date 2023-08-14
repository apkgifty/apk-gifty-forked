"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

import Countdown from "../Dashboard/DashUtils/Countdown";
import DisplayDialog from "../UI/Dialog/Dialog";
import Chat from "../Dashboard/DashUtils/Chat";
import Lottie from "lottie-react";
import loadingAnimation from "@/components/Animations/Lottie/blueloading.json";
import CancelOrderDialog from "../UI/Dialog/CancelOrderDialog";
import Payment from "./Payment";

interface Props {
  paymentMethods: any;
  orderData: any;
  token: any;
  rate: string;
}

// const sendRequest = async (id: string) => {
//   let data = JSON.stringify({ id });

//   let config = {
//     method: "POST",
//     maxBodyLength: Infinity,
//     url: "/api/notify-seller",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     data: data,
//   };

//   try {
//     const response = await axios(config);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const ConfirmOrder: React.FC<Props> = ({
  paymentMethods,
  orderData,
  token,
  rate,
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

  const [openDialog, setOpenDialog] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

  const [statuss, setStatuss] = useState(status);
  const [stop, setStop] = useState(processing_end_time);

  const [chat, setChat] = useState(null);

  const [loading, setLoading] = useState<boolean>(false);

  // Truncing price to show 0.00
  const fees = Math.trunc(0.01 * price * 100) / 100;

  const paths = usePathname().split("/");

  const pathname = paths[paths.length - 1];

  const router = useRouter();

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
      setLoading(true);
      const response = await axios(config);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    () => setLoading(false);
  });

  // Submit notify-seller request
  const handleSubmit = async () => {
    const res = await sendRequest(id);

    console.log(res.data);

    setStatuss(String(res.data.status));
    setStop(res.data.processing_end_time);
  };

  const cancelOrder = async (id: string) => {
    let data = JSON.stringify({ id });

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `/api/cancel-order`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: data,
    };

    try {
      setLoading(true);
      const response = await axios(config);
      console.log(response.data);
      setStatuss(response.data.data.status);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(statuss);
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

          <p className="text-xs lg:text-base text-gray-400">
            Rate{" "}
            <span className=" font-semi-bold text-orange-400">
              :- GHC {rate}
            </span>
          </p>
        </div>

        {pathname == "buy" && (
          <div className="mt-14">
            <h4 className="text-sm lg:text-lg font-semibold">
              Payment Instructions{" "}
            </h4>
            <ul className=" mt-6 flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:gap-y-0 flex-wrap">
              {paymentMethods.map((method: any) => (
                // <li key={method.id} className="cursor-pointer">
                //   <div className="space-y-3">
                //     <div>
                //       <h5 className="inline-block text-blue-700 px-3 py-1 border-2 border-blue-700 rounded-lg">
                //         {method.channel}
                //       </h5>
                //     </div>

                //     {/* <div>
                //       <p className="inline-block px-3 py-1 text-green-600 border-2 border-green-600 rounded-lg">
                //         <span></span> {method.body}
                //       </p>
                //     </div> */}
                //     {/* <div>
                //       <p className="inline-block px-3 py-1 text-green-600 border-2 border-green-600 rounded-lg">
                //         <span className="text-white">Name:</span>{" "}
                //         {method.sub_text}
                //       </p>
                //     </div> */}
                //   </div>
                // </li>
                <Payment method={method} key={method.id} />
              ))}
            </ul>
          </div>
        )}
        <div className="mt-12">
          <p className="text-sm lg:text-base">
            After Transfering the amount, click on the Transfered button
          </p>
        </div>
        <div className="mt-8 space-y-4 flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0">
          <button
            className="w-full text-sm px-4 py-2 bg-[#7995f5] rounded-lg lg:w-auto disabled:bg-gray-700 disabled:cursor-not-allowed "
            onClick={handleSubmit}
            disabled={statuss === "1" || status === "2" || status === "-1"}
          >
            {pathname === "buy"
              ? "Paid "
              : pathname === "sell"
              ? "Start Trade"
              : null}
          </button>

          {Number(statuss) === -1 ? null : Number(statuss) === 2 ? null : (
            <button
              className="w-full text-sm px-4 py-2 lg:w-auto"
              onClick={() => setOpenCancelDialog(true)}
            >
              Cancel Transfer
            </button>
          )}
        </div>
        {loading && (
          <div className="w-full flex justify-center">
            <div className="w-[100px] h-[100px] ">
              <Lottie animationData={loadingAnimation} />
            </div>
          </div>
        )}
        <div className="mt-10 flex items-center gap-x-4">
          {Number(statuss) === -1 ? null : Number(statuss) === 2 ? null : (
            <Countdown
              stopTime={stop}
              // action={runAction}
            />
          )}
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
      <Chat status={statuss} chat={chat} token={token} />
      <DisplayDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        title="Order Instructions"
        buttonText="Close"
      >
        <ol className="text-xs lg:text-sm list-decimal pl-2 space-y-4 text-gray-700">
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
          <li>
            You can always CONFIRM with us in the chat always when Buying or
            Selling A Gift Card incase you want clearance or have to make
            enquiries before making payment to us.
          </li>
        </ol>
      </DisplayDialog>
      <CancelOrderDialog
        cancelHandler={() => {
          cancelOrder(id);
          setOpenCancelDialog(false);
        }}
        handleClose={() => {
          setOpenCancelDialog(false);
        }}
        open={openCancelDialog}
      />
    </>
  );
};

export default ConfirmOrder;
