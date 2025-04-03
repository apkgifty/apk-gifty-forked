"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useAtom } from "jotai";
import { cartCountAtom } from "@/atoms/cartAtom";

const CartCountIcon = () => {
  const [count] = useAtom(cartCountAtom);

  return (
    <>
      <ShoppingCart className="h-5 w-5 text-white" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {count}
        </span>
      )}
    </>
  );
};

export default CartCountIcon;
