"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import DisplayDialog from "../UI/Dialog/Dialog";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { sendAdminEmail } from "@/utils/emailjs";
import { order } from "@/redux/features/orderSlice";

const makeUSDTPayment = async (id: number, loadingFunc: any) => {
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `/api/usdt-payment/`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: { id },
  };
  try {
    loadingFunc(true);
    const response = await axios(config);

    if (response.status == 200) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error: any) {
    console.log(error);
  } finally {
  }
};

const Payment = ({
  method,
  makePayment,
  id,
  loadingFunc,
  notifySeller,
  orderData,
}: {
  method: any;
  makePayment?: any;
  id: number;
  loadingFunc?: any;
  notifySeller?: any;
  orderData: any;
}) => {
  const [open, setOpen] = useState(false);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [usdtPaymentDetails, setUsdtPaymentDetails] = useState<any>(null);
  const [showUsdtDialog, setShowUsdtDialog] = useState(false);

  let methodImage;
  let dialog;

  if (method.channel.toLowerCase() === "momo") {
    methodImage =
      "https://s3-alpha-sig.figma.com/img/d048/78e6/916ecbea95a7be394b8a4945011aade3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LomuXo~Xdjk5EO~W1iJuIK5C08LlOLbL1OGax~1UcSTg7UFVs4pnrm~28d0a9or3oiFtB-U7qykhUwiKjw6JZJ67QjGVbbXlsClq-6uEeCfiKYpWyaLjt96e2yx5weJJ~BVCcT80hH2MNSQa-RLoen9AGfI5gssWV2ECY0TTFxOw~yXuPdVHCNISVUpANzLKWWK~EBUdVljylc14MvB7Y8xgAg8OgNSlciqm5XYQzRHko0kvik8dPoi7RfhQceOUSZ0Y-~4NT9YHW86In4pwkVsVi5JtkmLKOr1jxCgYigKOEhb~-8iWjjpQX8It8eqUftc-baZAht7WrTghMaCFgg__";
  } else if (method.channel.toLowerCase() === "bank") {
    methodImage =
      "https://s3-alpha-sig.figma.com/img/b2b7/a461/23f6dd7b90f234dede3198c3b7ba2b2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sL7U6MCYD5WbgWtaj1QW-CFXF9uYiyXJ5Zf8lX1VmMTrUxnjdiBAzMm33hB5kNv~nE5JIgZGF4Y3IHypw0jG76zXtNa01ClgUHxj6Al72f1-BKywN3QcpyQfxAbbCNA3EN5MlYuV1PeS1OdF-XFAIYvXBOAaIf8kkZmKXpzgsF-WBR~FmVLKgpo5ep1QoS0LsOF7FrzuVoXrt17wjVv54YulKkYQiD9N6R21FAWo3~A~tE0-1xBBa0BIHZZHhz0mOc0m3~s5O5N9K0tZBlMtnCKG760H8wbKHeVClbzUKTQ4js7-G56GjyB5vW~i0V6z9nVmdaxX9OJ0GozChekH2w__";
  } else if (method.channel.toLowerCase() === "usdt") {
    methodImage =
      "https://s3-alpha-sig.figma.com/img/a122/cdd4/cc46740a9fea1c775b5c3f84ad85185d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jwpnfod5Ki~Rz7D912AQRfepY0yykqL4IkJW~TXZl4eSnWD9yyaxXO1xD7Ny2O8mygdzFwECvxZqxhQWBEyT1Ckd7ys5AAPHIePE2W5vZiI8u~B9Q3Kmm08BXhVZ8FObtd75UkOhIeZdksQXZzRgU3Ho3Qykz1M7gKlFCSS5pMu9lP30rz4yDsWsfpPnpKH26wkwMZR7H48BcHPc9JGBfyfKx5iysEVeysLIEiCtqLg9tSD5po-GUylYs4NpA0oxJl-9Mkcte6suZMtNt49LiuiqFPzkCEmBClykljSZ-EsVL6U3nFlBtm7-AKZRzxeBpHiwa0a708t3f3eYyY2s9Q__";
  }

  const handleClick = (e: any) => {
    if (method.channel.toLowerCase() === "usdt") {
      setPaymentInitiated(true);
      setOpen(true);
    }
    setOpen(true);
  };

  const handleNotifySeller = async () => {
    try {
      if (method.channel.toLowerCase() === "usdt") {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/crypto/status/${id}`
        );
        // console.log("check status", response.data);
        if (response.data.payment_status === "waiting") {
          return alert(
            "Payment still in progress. Please wait for confirmation..."
          );
        } else {
          notifySeller();
          setOpen(false);
          sendAdminEmail(orderData);
          return;
        }
      }
      notifySeller();
      setOpen(false);
      sendAdminEmail(orderData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (paymentInitiated && method.channel.toLowerCase() === "usdt") {
      (async () => {
        const paymentDets = await makeUSDTPayment(id, setShowUsdtDialog);
        // console.log(paymentDets);

        setUsdtPaymentDetails(paymentDets);
      })();
    }
  }, [paymentInitiated]);

  if (method.channel.toLowerCase() === "usdt") {
    dialog = usdtPaymentDetails && (
      <DisplayDialog
        title={method.channel}
        buttonText="Continue"
        open={showUsdtDialog}
        handleClose={() => setOpen(false)}
        sx={{
          backgroundColor: "#161D26",
          borderColor: "black",
          color: "white",
        }}
      >
        <div>
          <div>
            <p className="text-orange-400">
              {usdtPaymentDetails.payment_address}
            </p>
            <p className="text-white mt-2">
              Network: {usdtPaymentDetails?.payment_type?.toUpperCase()}
            </p>
            <p className="text-white mt-2">
              Amount: ${usdtPaymentDetails?.amount}
            </p>
            <div className="text-center mt-3">
              <p
                className="py-2 px-3 bg-primary rounded-2xl text-white flex justify-center items-center gap-x-1 text-xs lg:text-sm cursor-pointer"
                onClick={() =>
                  navigator.clipboard.writeText(
                    usdtPaymentDetails.payment_address
                  )
                }
              >
                <span>
                  <ContentCopyIcon />
                </span>
                Copy Address
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center mt-7">
            <span
              className="text-white text-xs lg:text-sm px-4 py-1 bg-blue-500 cursor-pointer hover:bg-blue-900"
              onClick={handleNotifySeller}
            >
              Payment Sent
            </span>
          </div>
        </div>
      </DisplayDialog>
    );
  } else {
    dialog = (
      <DisplayDialog
        title={method.channel}
        buttonText="Continue"
        open={open}
        handleClose={() => setOpen(false)}
        sx={{
          backgroundColor: "#161D26",
          borderColor: "black",
          color: "white",
        }}
      >
        {method.image_url && (
          <div className="w-[250px] h-[250px] m-auto relative px-1 py-1 bg-white">
            <Image src={method.image_url} fill alt="payment qr code" />
          </div>
        )}
        <div>
          <p className="inline-block px-3 py-1 text-white rounded-lg">
            <span>{method.body}</span>
          </p>
        </div>
        <div>
          <p className="inline-block px-3 py-1 text-blue-600  rounded-lg">
            <span className="text-white">Name:</span> {method.sub_text}
          </p>

          <div className="w-full flex justify-center mt-3">
            <span
              className="text-white text-xs lg:text-sm px-4 py-1 bg-blue-500 cursor-pointer hover:bg-blue-900"
              onClick={handleNotifySeller}
            >
              Payment Sent
            </span>
          </div>
        </div>
      </DisplayDialog>
    );
  }

  return (
    <>
      <li className="cursor-pointer" onClick={handleClick}>
        <div
          className="space-y-3 py-6 lg:py-8 w-[180px] lg:w-[220px] bg-cover bg-center rounded-lg bg-white"
          style={{
            backgroundImage: `url(${methodImage})`,
          }}
        ></div>
      </li>
      {dialog}
    </>
  );
};

export default Payment;
