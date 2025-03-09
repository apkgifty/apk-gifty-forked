"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { json } from "stream/consumers";

const CartCountIcon = () => {
  const [cartCount, setCartCount] = useState<null | number>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const cart = localStorage.getItem("cart");
    setCartCount(cart ? JSON.parse(cart).length : 0);
  }, []);

  return (
    <Link
      href="/dashboard/cart"
      className="p-1.5 rounded-full hover:bg-gray-800 relative"
    >
      <ShoppingCart className="h-5 w-5" />
      {isClient && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartCountIcon;
