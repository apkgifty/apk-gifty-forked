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
    <div className="rounded-lg overflow-hidden relative group lg:w-48">
      <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
        <Image
          src={deal.dealImageUrl}
          alt={deal.dealName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out transform origin-bottom scale-y-0 group-hover:scale-y-100"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 z-10">
          <Link
            href={deal.dealUrl}
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
