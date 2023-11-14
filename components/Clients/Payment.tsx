"use client";

import React, { useState } from "react";
import Image from "next/image";
import DisplayDialog from "../UI/Dialog/Dialog";

const Payment = ({ method }: { method: any }) => {
  // console.log(method);
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <li className="cursor-pointer" onClick={() => setOpen(true)}>
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
            <span></span> {method.body}
          </p>
        </div>
        <div>
          <p className="inline-block px-3 py-1 text-blue-600  rounded-lg">
            <span className="text-white">Name:</span> {method.sub_text}
          </p>
        </div>
      </DisplayDialog>
    </>
  );
};

export default Payment;
