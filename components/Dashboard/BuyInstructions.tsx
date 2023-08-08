import React from "react";

const BuyInstructions = () => {
  return (
    <div>
      <p className="text-base text-gray-400 py-4">
        Before Proceeding to buy/sell your Gift Card or Other Payment methods,
        Follow These Intructions;
      </p>
      <ol className="list-decimal space-y-4 text-gray-400 lg:pl-10">
        <li>
          Remember every trade that occurs on our platform attracts a fee of 1%
          on every amount. All trades less than $100 will attract a $1 fee on
          it.
        </li>
        <li>
          Before you proceed Kindly make sure you’ve read through our Trade
          Guidelines before proceeding.
        </li>
        <li>
          The card or the code of your order will be uploaded in the chat
          section of this trade. Make sure to use the card within the timeframe
          provided for you.
        </li>
      </ol>
    </div>
  );
};

export default BuyInstructions;
