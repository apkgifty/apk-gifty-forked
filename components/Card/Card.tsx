import React from "react";

interface Prop {
  children: React.ReactNode;
}

const Card: React.FC<Prop> = ({ children }) => {
  return <div className="px-4 py-4 bg-primary rounded-lg">{children}</div>;
};

export default Card;
