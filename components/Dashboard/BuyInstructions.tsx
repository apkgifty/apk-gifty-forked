import React from "react";

const BuyInstructions = () => {
  return (
    <div>
      <p className="text-xs lg:text-sm text-gray-400 py-4">
        Before proceeding to make the payment or checkout for your order, please
        take a moment to review the following instructions:
      </p>
      <ol className="list-decimal space-y-4 text-xs lg:text-sm text-gray-400 lg:pl-10">
        <li>
          The processing and delivery time for your gift card order is typically
          30 minutes at most. If, for any reason, your order has not been
          processed within 2 hours, you have the option to request a refund. For
          more details, kindly refer to our Refund Policy.
        </li>
        <li>
          Once your gift card order is processed and delivered to you, it will
          be presented either as an attached photo in the chat screen or in text
          format. You will have a maximum timeframe of 30 minutes to 1 hour to
          redeem or use the purchased gift card. It&apos;s essential to adhere
          to the specific time duration associated with each gift card.
        </li>
        <li>
          If you are not yet ready to use the gift card you are ordering, kindly
          inform us in the chat section about the preferred time you wish to
          receive the gift card. Failure to do so will result in the assumption
          that you are prepared to use the gift card, and your order will be
          fulfilled accordingly.
        </li>
        <p className="text-xs lg:text-sm text-gray-400 py-4">
          Please ensure that you confirm with us in the chat once you have
          successfully redeemed or utilized the provided gift card. This step
          will enable us to close or complete the trade accordingly.
        </p>
      </ol>
    </div>
  );
};

export default BuyInstructions;
