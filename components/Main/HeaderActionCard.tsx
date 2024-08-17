"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SelectButton from "../UI/SelectButton";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  currenciesState,
  loadCurrenciesHandler,
} from "@/redux/features/currenciesSlice";

import TextInputWithButton from "../UI/TextInputWithButton";
import { RootState } from "@/redux/store";

const HeaderActionCard = ({
  loadedCurrencies,
}: {
  loadedCurrencies: currenciesState[];
}) => {
  const [serviceType, setServiceType] = useState("Buy");
  const [selectedCurrency, setSelectedCurrency] =
    useState<currenciesState | null>(null);

  const [paymentAmount, setPaymentAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");
  // const [currencies, setCurrencies] = useState<any>([]);

  // useEffect(() => {
  //   const fetchCurrencies = async () => {
  //     try {
  //       const response = await axios.get(
  //         process.env.NEXT_PUBLIC_API_ENDPOINT + "/currencies"
  //       );

  //       setCurrencies(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchCurrencies();
  // }, []);

  const currencies = useAppSelector(
    (state: RootState) => state.currenciesReducer.currencies
  );

  const dispatch = useAppDispatch();

  const sortedArray = [...currencies];

  useEffect(() => {
    dispatch(loadCurrenciesHandler(loadedCurrencies));
  }, [currencies]);

  useEffect(() => {
    if (selectedCurrency === null) {
      setSelectedCurrency(sortedArray[0]);
    }
  }, [sortedArray]);

  useEffect(() => {
    const total = (
      Number(paymentAmount) * Number(selectedCurrency?.rate)
    ).toFixed(2);
    setTotalAmount(total.toString());
  }, [paymentAmount, selectedCurrency]);

  sortedArray.sort((a: currenciesState, b: currenciesState) => {
    if (a.name === "USD") return -1; // "USA" should come first
    if (b.name === "USD") return 1; // "USA" should come first
    return a.name.localeCompare(b.name); // Alphabetical order for othes
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPaymentAmount(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
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
          menuOptions={[{ name: "PSN" }, { name: "AMAZON" }]}
          inputHandler={inputChangeHandler}
          value="PSN"
        />

        <TextInputWithButton
          label="Amount you need"
          name="amount_needed"
          type="number"
          defaultButtonText="USD"
          buttonText={selectedCurrency?.name}
          menuOptions={sortedArray}
          icon={<KeyboardArrowDownIcon />}
          onChangeHandler={setSelectedCurrency}
          inputHandler={inputChangeHandler}
          value={paymentAmount == "0.00" ? "" : paymentAmount}
          placeholder="0.00"
        />
        <TextInputWithButton
          label="Amount you pay"
          name="amount_payment"
          type="number"
          buttonText="GHS"
          inputHandler={inputChangeHandler}
          value={totalAmount}
        />
      </div>
      <div className="mt-4 mb-6">
        <button className="bg-[#38C446] px-6 py-2 rounded-md">Buy Now</button>
      </div>
    </motion.div>
  );
};

export default HeaderActionCard;
