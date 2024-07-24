"use client";

import { useState } from "react";

interface Props {
  isFixedPrice: boolean;
  handleAmount: any;
  amount: string;
  currencySymbol: string;
}

const BuyAmountInput: React.FC<Props> = ({
  isFixedPrice,
  handleAmount,
  amount,
  currencySymbol,
}) => {
  // const [value, setValue] = useState("");

  // const handleValue = (e: any) => {
  //   setValue(e.target.value);
  // };

  return (
    <div className="w-full h-12 border border-gray-600 rounded-lg flex justify-center items-center">
      <span className="text-3xl ml-12">{currencySymbol}</span>
      <input
        type="number"
        value={amount}
        className="bg-transparent text-white text-3xl w-28 outline-none"
        onChange={handleAmount}
      />
    </div>
  );
};

export default BuyAmountInput;
