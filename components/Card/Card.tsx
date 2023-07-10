import React from "react";

interface Prop {
  children: React.ReactNode;
  className: string;
}

const Card: React.FC<Prop> = ({ children, className }) => {
  return (
    <div
      className={` ${className} text-white  relative  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center `}
    >
      {children}
    </div>
  );
};

export default Card;
