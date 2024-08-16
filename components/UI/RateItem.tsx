import React from "react";

interface RateItemProps {
  currency: string;
  rate: string;
}

const RateItem: React.FC<RateItemProps> = ({ currency, rate }) => {
  return (
    <div className="flex items-center space-x-1">
      <p className="text-sm">{currency}</p>
      <p className="text-sm text-white bg-[#027C4C] px-3 py-1 rounded-xl">
        {rate}
      </p>
    </div>
  );
};

export default RateItem;
