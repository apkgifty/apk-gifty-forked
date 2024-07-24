import React from "react";
import Link from "next/link";

interface Props {
  type: string;
}

const BuyInstructions: React.FC<Props> = ({ type }) => {
  let content;

  if (type === "Card") {
    content = (
      <>
        {" "}
        <p className="text-xs lg:text-sm text-gray-400 py-4">
          Before proceeding to make the payment or checkout for your order,
          please take a moment to review the following instructions:
        </p>
        <ol className="list-decimal space-y-4 text-xs lg:text-sm text-gray-400 lg:pl-10">
          <li>
            The processing and delivery time for your gift card order is
            typically 30 minutes at most. If, for any reason, your order has not
            been processed within 2 hours, you have the option to request a
            refund. For more details, kindly refer to our Refund Policy.
          </li>
          <li>
            Once your gift card order is processed and delivered to you, it will
            be presented either as an attached photo in the chat screen or in
            text format. You will have a maximum timeframe of 30 minutes to 1
            hour to redeem or use the purchased gift card. It&apos;s essential
            to adhere to the specific time duration associated with each gift
            card.
          </li>
          <li>
            If you are not yet ready to use the gift card you are ordering,
            kindly inform us in the chat section about the preferred time you
            wish to receive the gift card. Failure to do so will result in the
            assumption that you are prepared to use the gift card, and your
            order will be fulfilled accordingly.
          </li>
          <p className="text-xs lg:text-sm text-gray-400 py-4">
            Please ensure that you confirm with us in the chat once you have
            successfully redeemed or utilized the provided gift card. This step
            will enable us to close or complete the trade accordingly.
          </p>
        </ol>
      </>
    );
  } else if (type === "Bank") {
    content = (
      <div className="text-xs lg:text-sm text-gray-400 py-4">
        <h4 className=" text-sm lg:text-sm font-bold"> Availability</h4>
        <p> For users in Ghana 🇬🇭 and partially for Nigerians 🇳🇬.</p>{" "}
        <p className="font-bold mt-2 text-white"> Payment Instructions </p>{" "}
        <p>Use Mobile Money (MoMo) for bank deposits.</p>
        <p className="font-bold mt-2 text-white">
          {" "}
          Deposit Limits: Minimum GHC 500, Maximum GHC 1,000,000. For higher
          amounts, contact Admin.
        </p>
        <p className="font-bold mt-2 text-white">Processing Time</p>
        <p>
          {" "}
          Deposits are processed within 10 to 30 minutes. If busy, it may take
          up to 1 hour.
        </p>{" "}
        <p className="font-bold mt-2 text-white">Crypto Conversion</p>
        <p>
          {" "}
          For converting crypto (USDT, Bitcoin, ETH) to bank payment, contact
          Admin.
        </p>
        <Link href="/refund-policy">
          {" "}
          <p className="font-bold mt-2 text-blue-600"> Refund Policy </p>{" "}
        </Link>
        <p>
          No reversals or chargebacks allowed after payment. For refunds,
          contact Admin and file a ticket. Refunds are processed within 30
          minutes to 3 hours.
        </p>
        <p className="font-bold mt-2 text-white">Verification</p>
        <p>
          {" "}
          For deposits over GHC 5,000, ensure your account is verified (KYC
          verification).
        </p>
        <p>Proceed </p>
        <p>
          After reading and agreeing to these instructions, proceed with your
          deposit.
        </p>
        - ⁠
        <p>
          {" "}
          After Making Payment Click Start Trade and Drop Bank Details(Account
          Number, Name and any ID(optional) - ⁠Admin will verify and process
          your Bank Deposit
        </p>
        <p> Payment to Nigerian Bank</p>
        <p>Select “Naira Payment” from Bank Services.</p>
        <p> Follow the same procedure.</p>{" "}
        <p>
          Click Start Trade and inform Admin of the amount you wish to deposit
          to a Nigerian bank.
        </p>{" "}
        <p>You will receive the equivalent Naira value.</p>{" "}
        <p>Once agreed, proceed. </p>{" "}
        <p> Make payment to the provided MoMo details.</p>{" "}
        <p>
          {" "}
          Provide the account number or details in the chat section, and Admin
          will process your order.
        </p>
      </div>
    );
  } else if (type === "Bundle") {
    content = (
      <div className="text-xs lg:text-sm text-gray-400 py-4">
        <p className="font-bold mt-2 text-white">Availability</p>
        <p>
          This offer is for MTN, AirtelTigo, and Telecel users in Ghana 🇬🇭 only.
        </p>
        <p>Agreement: If you agree to these terms, click on Next/Proceed.</p>
        <p className="font-bold mt-2 text-white">Payment Process</p>
        <p>
          Use Mobile Money (MoMo) to make your payment. Follow the instructions
          provided after clicking on MoMo.
        </p>
        <p className="font-bold mt-2 text-white">Chargebacks</p>{" "}
        <p>
          {" "}
          Once you&apos;ve made a payment, you cannot request a chargeback
          through customer care. If you do, your account and order will be
          terminated.
        </p>
        <Link href={"/refund-policy"}>
          {" "}
          <p className="font-bold mt-2 text-white"> Refund Policy</p>
        </Link>
        <p>
          For refunds, do not request a chargeback. Instead, contact the Admin
          through the chat section. Notify them that you no longer wish to
          proceed, and your refund will be processed within 30 minutes to 3
          hours. If there’s a delay, it means admins are busy with other orders.
        </p>
        <p className="font-bold mt-2 text-white">Payment</p>{" "}
        <p>
          {" "}
          Make the payment as per the provided details and click on Start Trade.
        </p>{" "}
        <p className="font-bold mt-2 text-white"> Provide Phone Number</p>{" "}
        <p>
          In the chat section, enter the phone number that you want the bundle
          to be sent to.
        </p>{" "}
        <p className="font-bold mt-2 text-white"> Admin Response</p>
        <p>
          The Admin will respond to your order promptly, confirm it, and process
          it quickly.
        </p>
      </div>
    );
  }

  return <div className="space-y-1">{content}</div>;
};

export default BuyInstructions;
