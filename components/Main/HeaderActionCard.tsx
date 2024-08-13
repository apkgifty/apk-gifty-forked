"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeaderActionCard = () => {
  const [serviceType, setServiceType] = useState("Buy");

  return (
    <div className="max-w-lg mx-auto bg-white py-4 px-6 mt-4">
      <div className="space-x-2">
        <button
          className={`${
            serviceType === "Buy"
              ? "bg-[#1984FF] text-white"
              : "bg-white text-black border border-black"
          } px-6 py-1 rounded-md`}
          onClick={() => setServiceType("Buy")}
        >
          Buy
        </button>
        <button
          className={`${
            serviceType === "Sell"
              ? "bg-[#1984FF] text-white"
              : "bg-white text-black border border-black"
          } px-6 py-1 rounded-md`}
          onClick={() => setServiceType("Sell")}
        >
          Sell
        </button>
      </div>
      <div className="mt-6 text-left text-black space-y-4">
        <div>
          <p className="text-sm">Select giftcard</p>
          <div className="w-full flex">
            <TextField
              id="outlined-size-small"
              defaultValue="Small"
              hiddenLabel
              size="small"
              fullWidth
              InputProps={{ sx: { borderRadius: 0 } }}
              className="w-full"
            />{" "}
            <div>
              <button className="bg-[#1984FF] text-white px-3 py-1 text-sm rounded-r-sm  h-full">
                <KeyboardArrowDownIcon />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm">Amount you need</p>
          <div className="w-full flex">
            <TextField
              id="outlined-size-small"
              defaultValue="Small"
              hiddenLabel
              fullWidth
              size="small"
              InputProps={{ sx: { borderRadius: 0 } }}
              className="w-full rounded-none"
            />{" "}
            <div>
              <button className="bg-[#1984FF] text-white px-3 py-1 text-sm rounded-r-sm w-[100px] h-full">
                USD
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm">Amount you pay</p>
          <div className="w-full flex">
            <TextField
              id="outlined-size-small"
              defaultValue="Small"
              hiddenLabel
              fullWidth
              size="small"
              InputProps={{ sx: { borderRadius: 0 } }}
              className="w-full"
            />{" "}
            <div>
              <button className="bg-[#1984FF] text-white px-3 py-1 text-sm rounded-r-sm w-[100px] h-full">
                GHC
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-6">
        <button className="bg-[#38C446] px-6 py-2 rounded-md">Buy Now</button>
      </div>
    </div>
  );
};

export default HeaderActionCard;
