"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SelectButton from "../UI/SelectButton";
import { motion } from "framer-motion";

import TextInputWithButton from "../UI/TextInputWithButton";

const HeaderActionCard = () => {
  const [serviceType, setServiceType] = useState("Buy");
  const [currencies, setCurrencies] = useState<any>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_ENDPOINT + "/currencies"
        );

        setCurrencies(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrencies();
  }, []);

  currencies.sort((a: any, b: any) => {
    if (a.name === "USD") return -1; // "USA" should come first
    if (b === "USD") return 1; // "USA" should come first
    return a.name.localeCompare(b.name); // Alphabetical order for others
  });

  console.log(currencies);

  return (
    <div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   transition={{ duration: 2 }}
      className="max-w-lg mx-auto bg-white py-4 px-6 mt-4 rounded-md"
    >
      <div className="space-x-2">
        <SelectButton
          label="Buy"
          serviceType={serviceType}
          setServiceType={setServiceType}
        />
        <SelectButton
          label="Sell"
          serviceType={serviceType}
          setServiceType={setServiceType}
        />
      </div>
      <div className="mt-6 text-left text-black space-y-4">
        <TextInputWithButton
          label="Select giftcard"
          name="giftcard"
          type="text"
          icon={<KeyboardArrowDownIcon />}
        />

        <TextInputWithButton
          label="Amount you need"
          name="amount-needed"
          type="number"
          defaultButtonText="USD"
          buttonText={currencies[0]?.name}
          menuOptions={currencies}
          icon={<KeyboardArrowDownIcon />}
        />
        <TextInputWithButton
          label="Amount you pay"
          name="amount-payment"
          type="number"
          buttonText="GHS"
        />
      </div>
      <div className="mt-4 mb-6">
        <button className="bg-[#38C446] px-6 py-2 rounded-md">Buy Now</button>
      </div>
    </div>
  );
};

export default HeaderActionCard;
