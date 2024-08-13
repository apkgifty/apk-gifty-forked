import React from "react";
import Image from "next/image";

const DownloadApp: React.FC = () => {
  return (
    <div className="flex space-x-3">
      <div className="p-2 bg-secondary cursor-pointer rounded-lg">
        <Image
          src={"/images/appstore-download.png"}
          alt="get app from app store"
          width={125}
          height={125}
          priority
        />
      </div>
      <div className="p-2 bg-secondary cursor-pointer rounded-lg">
        <Image
          src={"/images/playstore-download.png"}
          alt="get app from app store"
          width={125}
          height={125}
          priority
        />
      </div>
    </div>
  );
};

export default DownloadApp;
