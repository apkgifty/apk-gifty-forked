import React from "react";

interface SelectButtonProps {
  label: string;
  serviceType: string;
  setServiceType: (serviceType: string) => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  serviceType,
  setServiceType,
  label,
}) => {
  return (
    <button
      className={`${
        serviceType === label
          ? "bg-[#1984FF] text-white"
          : "bg-white text-black border border-black"
      } px-6 py-1 rounded-md`}
      onClick={() => setServiceType(label)}
    >
      {label}
    </button>
  );
};

export default SelectButton;
