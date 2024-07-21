import React from "react";
import Image from "next/image";

interface Props {
  productInfo: any;
}

const DataBundle: React.FC<Props> = ({ productInfo }) => {
  const { name, price, category, icon, image_url, description, currency } =
    productInfo;
  return (
    <div className="w-full flex  border-t-2  border-[#12181F]">
      <div className="flex flex-1 justify-center items-center border-r-2 border-[#12181F]">
        <div className="rounded-full w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] overflow-hidden relative">
          <Image
            src={image_url}
            alt="data-image"
            fill
            objectFit="contain"
            className="rounded-full  absolute"
          />
        </div>
      </div>
      <div className="flex flex-1 py-4 justify-center items-center border-r-2 border-[#12181F]">
        <p className="text-xs lg:text-sm">MTN 5GB</p>
      </div>
      <div className="flex flex-1 py-4 justify-center items-center border-r-2 border-[#12181F]">
        <p className="text-xs lg:text-sm">GHS 31.00</p>
      </div>
      <div className="flex flex-1 py-4 justify-center items-center">
        <button className="bg-green-500 text-white px-4 py-1 lg:py-2 text-xs lg:text-sm rounded-md">
          BUY
        </button>
      </div>
    </div>
  );
};

export default DataBundle;
