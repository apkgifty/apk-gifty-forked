"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import DisplayDialog from "../UI/Dialog/Dialog";

const Payment = ({
  method,
  makePayment,
  id,
  loadingFunc,
  notifySeller,
}: {
  method: any;
  makePayment?: any;
  id: number;
  loadingFunc?: any;
  notifySeller?: any;
}) => {
  const [open, setOpen] = useState(false);
  const [paymentInitiated, setPaymentInitiated] = useState(false);

  const handleClick = (e: any) => {
    if (method.channel === "Momo") {
      setPaymentInitiated(true);
    } else {
      setOpen(true);
    }
  };

  const handleNotifySeller = async () => {
    try {
      notifySeller();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (paymentInitiated) {
      makePayment(id, loadingFunc, method.channel);
    }
  }, [paymentInitiated]);

  return (
    <>
      {" "}
      <li className="cursor-pointer" onClick={handleClick}>
        <div className="space-y-3">
          <div>
            <h5 className="inline-block text-blue-700 px-3 py-1 border-2 border-blue-700 rounded-lg">
              {method.channel}
            </h5>
          </div>
        </div>
      </li>
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
          {method.channel !== "Momo" && (
            <div className="w-full flex justify-center mt-3">
              <span
                className="text-white text-xs lg:text-sm px-4 py-1 bg-blue-500 cursor-pointer hover:bg-blue-900"
                onClick={handleNotifySeller}
              >
                Payment Sent
              </span>
            </div>
          )}
        </div>
      </DisplayDialog>
    </>
  );
};

export default Payment;
