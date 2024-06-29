import Image from "next/image";
import React from "react";

const BankCard = () => {
  return (
    <div>
      <div className="w-[105px] h-[105px] lg:w-[250px] lg:h-[250px] relative rounded-lg">
        <Image
          src={"/images/ecobank.jpeg"}
          alt="bank-name"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div>
        <span>Bank Name</span>
      </div>
    </div>
  );
};

export default BankCard;
