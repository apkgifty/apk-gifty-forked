"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import axios from "axios";
import { useSetAtom } from "jotai";
import { cartAtom, CartState } from "@/atoms/cartAtom";

interface Props {
  productInfo: any;
}

const BuyProductCard: React.FC<Props> = ({ productInfo }) => {
  const { name, price, category, icon, image_url, description, currency } =
    productInfo;

  const setCart = useSetAtom(cartAtom);

  const addToCart = async () => {
    try {
      const products = [
        {
          product_id: productInfo.id,
          product_quantity: 1,
          name: productInfo.name,
          price: productInfo.price,
          currency: productInfo.currency,
          image_url: productInfo.image_url,
          category: productInfo.category,
        },
      ];

      const response = await axios.post("/api/cart", { products });
      console.log("API Response:", response.data);

      // Update cart state with the new item

      const newCart = response.data.data;
      const total = newCart.reduce(
        (acc: number, item: any) => acc + Number(item.product.price) * 1,
        0
      );

      console.log("response data", newCart);
      setCart((prev: CartState) => {
        const newState = {
          ...prev,
          items: newCart,
          total: total,
        };
        console.log("New Cart State:", newState);
        return newState;
      });
    } catch (error: any) {
      console.error("Cart error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });

      if (error.response?.data) {
        console.error("Server error details:", error.response.data);
      }
    }
  };

  return (
    <div className="w-full md:w-[280px]">
      {" "}
      {/* Fixed width container */}
      <div className="flex flex-col space-y-4">
        {/* Card */}
        <div className="aspect-square rounded-t-xl overflow-hidden relative w-full h-0 pb-[100%]">
          <Image
            src={image_url}
            alt={name}
            fill
            className="w-full h-full object-cover bg-no-repeat"
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
                {currency.symbol}
                {price}
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
