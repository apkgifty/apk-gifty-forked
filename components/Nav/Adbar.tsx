import Image from "next/image";
import React from "react";
import DownloadApp from "../Main/Section/DownloadApp";

const Adbar = () => {
  return (
    <div className="w-full py-2 flex justify-center items-center lg:space-x-8 px-8">
      <p className="text-white font-light text-sm lg:text-lg">
        Trading made easy
      </p>
      <DownloadApp />
    </div>
  );
};

export default Adbar;
