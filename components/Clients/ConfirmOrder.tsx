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
import PurchaseButton from "./PurchaseButton";
import CancelButton from "./CancelButton";
import ReportIcon from "@mui/icons-material/Report";

interface Props {
  paymentMethods: any;
  orderData: any;
  token: any;
  rate: string;
}

// const getOrder = async (id: string) => {
//   try {
//     const response = await axios.get("/api/get-order", { params: { id: id } });
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

  console.log(token);

  const [openDialog, setOpenDialog] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

  const [statuss, setStatuss] = useState("");
  const [stop, setStop] = useState("");

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

      return response.data;
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateStatus = async () => {
      // const response = await getOrder(id);
      // console.log(response.data);
      setLoading(true);
      const getOrder = async (id: string) => {
        try {
          const response = await axios.get(
            `https://backend.apkxchange.com/api/order/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // console.log(response.data.data);
          setLoading(false);
          setStatuss(response.data.data.status);
          setStop(response.data.data.processing_end_time);
          return response.data;
        } catch (error) {
          console.log(error);
        }
      };
      getOrder(id);
    };

    updateStatus();

    return () => setLoading(false);
  }, []);

  // Submit notify-seller request
  const handleSubmit = async () => {
    const res = await sendRequest(id);

    // console.log(res.data);

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
      // console.log(response.data);
      setStatuss(response.data.data.status);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(pathname);
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
              :- 1$ / GHC {rate}
            </span>
          </p>
        </div>

        {pathname == "buy" && (
          <div className="mt-14">
            <h4 className="text-sm lg:text-lg font-semibold">
              Payment Instructions{" "}
            </h4>
            <p className="mt-10">
              <span className="mr-2 text-orange-600">
                <ReportIcon />
              </span>{" "}
              Kindly note that when sending payments for transactions, it&#x27;s
              essential to use your registered account username as the payment
              reference. This ensures accurate processing. Thank you for your
              cooperation.
            </p>
            <ul className=" mt-6 flex justify-between lg:flex-row lg:justify-between lg:gap-y-0 flex-wrap">
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
            Kindly begin your transaction by clicking &#x27;Start Trade&#x27;
            before proceeding with your payment.
          </p>
          {pathname === "buy" && (
            <p className="text-sm lg:text-base text-orange-400 mt-4">
              Amount to pay in Ghana Cedis - GHC{" "}
              {(Number(price) * Number(rate)).toFixed(2)}
            </p>
          )}
        </div>
        <div className="mt-8 space-y-4 flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0">
          {loading ? (
            <div className="w-full flex justify-center">
              <div className="w-[100px] h-[100px] ">
                <Lottie animationData={loadingAnimation} />
              </div>
            </div>
          ) : (
            <>
              {" "}
              <PurchaseButton
                pathname={pathname}
                handleSubmit={handleSubmit}
                status={statuss}
              />
              <CancelButton status={statuss} openDialog={setOpenCancelDialog} />
            </>
          )}
        </div>
        {loading && status === "" && (
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
      <Chat status={statuss} chat={chat} token={token} id={id} />
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
            The card or the code of your order will be uploaded in the chat
            section of this trade. Make sure to use the card within the
            timeframe provided for you.
          </li>
          <li>
            You can always CONFIRM with us in the chat always when Buying or
            Selling A Gift Card incase you want clearance or have to make
            enquiries before making payment to us.
          </li>
          <li>
            Calculating the Ghana Cedis equivalent for payment through Mobile
            Money is as follows, applicable to Local Users in Ghana only:
            Multiply the Rate by the Amount to Pay. For instance, when
            purchasing a &quot;$100 iTunes gift card&quot; with an amount due of
            $72, the computation would be &quot;72 x 11.5 = GHC 828 + Fees
            ($1)&quot;, resulting in a total of GHC 839.
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
