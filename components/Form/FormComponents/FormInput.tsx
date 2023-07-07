"use client";

import React from "react";

interface Props {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
}

const FormInput: React.FC<Props> = ({
  icon,
  type,
  placeholder,
  name,
  required,
}) => {
  return (
    <div className="w-full px-2 py-2 bg-tertiary rounded-xl flex gap-2 lg:py-3 ">
      <div className="px-2 border-r border-gray-400">{icon}</div>
      <input
        type={type}
        className="bg-transparent outline-none text-xs lg:text-sm"
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </div>
  );
};

export default FormInput;
