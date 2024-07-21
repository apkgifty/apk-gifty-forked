"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  productInfo: any;
}

const DataBundle: React.FC<Props> = ({ productInfo }) => {
  const { name, price, category, icon, image_url, description, currency } =
    productInfo;

  const pathname = usePathname();

  const splitPathname = pathname.split("/");
  const pathTag = splitPathname[splitPathname.length - 1];

  // Add pid to params so it can be picked from url
  const prod = { ...productInfo, pid: productInfo.id };

  const pathEnd =
    pathTag === "buy" || pathTag === "other-services" ? "buy" : "sell";

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
        <p className="text-xs lg:text-sm">{name}</p>
      </div>
      <div className="flex flex-1 py-4 justify-center items-center border-r-2 border-[#12181F]">
        <p className="text-xs lg:text-sm">{`${currency.name} ${price}`}</p>
      </div>
      <div className="flex flex-1 py-4 justify-center items-center">
        <Link
          href={{
            pathname: `/dashboard/exchange/product/${pathEnd}`,
            query: prod,
          }}
        >
          <button className="bg-green-500 text-white px-4 py-1 lg:py-2 text-xs lg:text-sm rounded-md">
            BUY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DataBundle;
