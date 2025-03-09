"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface Props {
  productInfo: any;
}

const BuyProductCard: React.FC<Props> = ({ productInfo }) => {
  const { name, price, category, icon, image_url, description, currency } =
    productInfo;

  const addToCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    const parsedCart = localStorageCart ? JSON.parse(localStorageCart) : [];
    parsedCart.push(productInfo);
    localStorage.setItem("cart", JSON.stringify(parsedCart));
  };
  return (
    <div className="w-full md:w-[280px]">
      {" "}
      {/* Fixed width container */}
      <div className="flex flex-col space-y-4">
        {/* Card */}
        <div className="aspect-square rounded-t-xl overflow-hidden relative h-[280px] w-full">
          <Image
            src="https://s3-alpha-sig.figma.com/img/02e2/d8ae/6dab05a57474da6ea9d20aebae27a65a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qKpyE3f0E3A93ZRKlGRhz77Rfr3hjl63DMbHGjynUb6QKs9p2jEyIJvPA5KdG3PAwi~~t3vQBR~oymD-dm7SFl03O4CQHPKqGAYGXRb-ZgxNbRpvB24xwKliIVjKMd1NGviCoFVCdcDEkmrC7XdzhzYIN2oY5UBfdGJTc7qS~xM3smMputS7YPBH0ssLMlDpXfNjGTUehYPxb37FmjN7UO1eWaPUTlnMEVyOQrvfoH3I68~TvnUEi3CUHjTYNxLKkp~Zgwgv99m8wtq2ztoDinLpDDZODMsP2J7-7~amHaRmUVX7nUH0Yde~naoFZ494vcUcH5bWLbEdS0bV~Ml8jw__"
            alt="Mario"
            fill
            className="w-full h-auto object-cover"
          />
          {/* 45% OFF Tag */}
          <div className="absolute top-0 right-0 bg-red-600 text-white py-2 px-4 clip-path-tag">
            <div className="font-bold text-xs">
              45%
              <br />
              OFF
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-xs text-white font-medium">{name}</h3>
            <div className="flex items-center gap-2">
              <div className="bg-[#1e3a27] text-xs text-[#4ade80] px-3 py-1 rounded-full border border-[#4ade80]">
                $179.55
              </div>
              <span className="text-gray-500 text-xs line-through">
                $399.00
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-[#4ade80] text-xs hover:bg-[#22c55e] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              onClick={addToCart}
            >
              <ShoppingCart className="h-5 w-5" />
              Buy Now
            </button>
            <span className="text-gray-400 text-xs">Qty: 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProductCard;
