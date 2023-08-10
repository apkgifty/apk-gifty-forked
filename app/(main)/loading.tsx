import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image
        src={"/images/apklogo-new.png"}
        width={400}
        height={400}
        alt="splash screen logo"
      />
    </div>
  );
};

export default Loading;
