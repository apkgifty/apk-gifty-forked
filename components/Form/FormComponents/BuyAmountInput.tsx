"use client";

import { useState } from "react";

const BuyAmountInput = () => {
  const [value, setValue] = useState("$");

  const handleValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full h-12 border border-gray-600 rounded-lg flex justify-center items-center">
      <span className="text-3xl ml-12">$</span>
      <input
        type="number"
        value={value}
        className="bg-transparent text-white text-3xl w-28 outline-none"
        onChange={handleValue}
      />
    </div>
  );
};

export default BuyAmountInput;
