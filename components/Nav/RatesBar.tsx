"use client";
import React from "react";
import RateItem from "../UI/RateItem";
import AppLayout from "../Layout/AppLayout";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { motion } from "framer-motion";

const RatesBar = () => {
  const currencies = useAppSelector(
    (state: RootState) => state.currenciesReducer.currencies
  );

  return (
    <div className="w-full  py-2 bg-white">
      <AppLayout>
        <div className="relative flex overflow-x-hidden max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center space-x-4 lg:space-x-8 px-8 animate-marquee whitespace-nowrap"
          >
            {currencies.length > 0 &&
              currencies.map((currency) => (
                <RateItem
                  key={currency.updated_at}
                  currency={currency.name}
                  rate={currency.rate}
                />
              ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex absolute top-0 justify-center items-center space-x-4 lg:space-x-8 px-8 animate-marquee2 whitespace-nowrap"
          >
            {currencies.length > 0 &&
              currencies.map((currency) => (
                <RateItem
                  key={currency.created_at}
                  currency={currency.name}
                  rate={currency.rate}
                />
              ))}
          </motion.div>
        </div>
      </AppLayout>
    </div>
  );
};

export default RatesBar;
