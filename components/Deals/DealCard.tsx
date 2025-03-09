"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  dealUrl: string;
  dealImageUrl: string;
  dealName: string;
  btnColor: string;
}

const DealCard = ({ deal }: any) => {
  const router = useRouter();
  return (
    <div className="rounded-lg overflow-hidden relative group">
      <div className="relative h-[420px]">
        <Image
          src={deal.dealImageUrl}
          alt={deal.dealName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out transform origin-bottom scale-y-0 group-hover:scale-y-100"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 z-10">
          {/* <div className="text-center">
          <h3 className="text-2xl font-bold mb-1 text-white">
            BEST
          </h3>
          <h2 className="text-4xl font-bold mb-4 text-white">
            XBOX
          </h2>
          <h3 className="text-3xl font-bold text-white">DEALS</h3>
        </div> */}

          <Link
            // href={"/dashboard/exchange/buy/deals?category=Xbox&currency=USD"}
            href={deal.dealUrl}
            // onClick={() =>
            //   router.push(
            //     "/dashboard/exchange/buy/deals?category=Xbox&currency=USD"
            //   )
            // }
            className={`${deal.btnColor} text-white px-4 py-2 rounded-md text-sm mt-auto`}
          >
            Explore Deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
