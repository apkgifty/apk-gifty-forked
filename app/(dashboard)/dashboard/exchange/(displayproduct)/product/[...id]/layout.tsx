import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full pb-32 lg:pb-10 h-screen bg-secondary">
      {children}
    </div>
  );
};

export default layout;
