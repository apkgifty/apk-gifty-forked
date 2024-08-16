import React from "react";
import RateItem from "../UI/RateItem";
import AppLayout from "../Layout/AppLayout";

const RatesBar = () => {
  return (
    <div className="w-full py-2  bg-white">
      <AppLayout>
        <div className="relative flex overflow-x-hidden max-w-3xl mx-auto">
          <div className="flex justify-center items-center lg:space-x-8 px-8 animate-marquee whitespace-nowrap">
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
          </div>

          <div className="flex absolute top-0 justify-center items-center lg:space-x-8 px-8 animate-marquee2 whitespace-nowrap">
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
            <RateItem currency="USD" rate="15.00" />
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default RatesBar;
