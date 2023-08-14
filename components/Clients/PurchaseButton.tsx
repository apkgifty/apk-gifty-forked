import React from "react";

interface Props {
  handleSubmit: () => void;
  status: any;
  pathname: string;
}

const PurchaseButton: React.FC<Props> = ({
  status,
  pathname,
  handleSubmit,
}) => {
  if (status === "") {
    return null;
  }

  return (
    <button
      className="w-full text-sm px-4 py-2 bg-[#7995f5] rounded-lg lg:w-auto disabled:bg-gray-700 disabled:cursor-not-allowed "
      onClick={handleSubmit}
      disabled={status === "1" || status === "2" || status === "-1"}
    >
      {pathname === "buy"
        ? "Start Trade "
        : pathname === "sell"
        ? "Start Trade"
        : null}
    </button>
  );
};

export default PurchaseButton;
