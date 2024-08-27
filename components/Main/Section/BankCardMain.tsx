import React from "react";
import Image from "next/image";

interface BankCardProps {
  title: string;
  brief: string;
}

const BankCardMain: React.FC<BankCardProps> = ({ title, brief }) => {
  return (
    <div className="max-w-sm flex flex-col items-center lg:items-start justify-center py-6 px-4 bg-secondary space-y-2 rounded-md">
      <Image
        src={"/images/bank.png"}
        alt={"bank-icon"}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="text-center lg:text-left">
        <p className="text-sm lg:text-base font-bold text-[#1984FF]">{title}</p>
        <p className="text-xs lg:text-sm text-white">{brief}</p>
      </div>
    </div>
  );
};

export default BankCardMain;
