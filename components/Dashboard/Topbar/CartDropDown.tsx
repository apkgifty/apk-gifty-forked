"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import CartCountIcon from "./CartCountIcon";
import { useAtom } from "jotai";
import { cartAtom, CartItem } from "@/atoms/cartAtom";
import Image from "next/image";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useAtom(cartAtom);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  // Check if we're on the cart page
  const isCartPage = pathname === "/dashboard/cart";

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define fetchCart function
  const fetchCart = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get("/api/cart");
      console.log("Cart data:", response.data);

      if (response.data) {
        const items = response.data.data || [];
        const total = items.reduce(
          (acc: number, item: any) =>
            acc + Number(item.product.price) * item.product_quantity,
          0
        );

        console.log("items", items);
        console.log("total", total);
        setCart({
          items: items,
          total: total,
        });
      }
    } catch (error: any) {
      console.error("Error fetching cart:", error);
      setError("Failed to load cart data. Please try again later.");

      // If we have an error response with details, log them
      if (error.response?.data) {
        console.error("Error details:", error.response.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch cart data on mount
  useEffect(() => {
    if (!mounted) return;
    fetchCart();
  }, [mounted, setCart]);

  // Calculate dropdown position when opening
  useEffect(() => {
    if (!mounted || !isOpen || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    const windowWidth = window.innerWidth;

    if (windowWidth < 640) {
      setDropdownPosition({
        left: Math.max(10, Math.min(windowWidth - 330, windowWidth / 2 - 160)),
        top: top,
      });
    } else {
      setDropdownPosition({
        left: Math.max(10, left - 300 + rect.width),
        top: top,
      });
    }
  }, [isOpen, mounted]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    if (!mounted) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mounted]);

  // Handle button click
  const handleButtonClick = () => {
    // If we're on the cart page, navigate to it instead of opening dropdown
    if (isCartPage) {
      return;
    }
    setIsOpen(!isOpen);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="p-1.5 rounded-full hover:bg-gray-800 relative"
        onClick={handleButtonClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Cart"
      >
        <CartCountIcon />
      </button>

      {isOpen && !isCartPage && (
        <div
          ref={dropdownRef}
          className="fixed z-50 w-80 bg-[#1e2328] rounded-md shadow-lg"
          style={{
            left: `${dropdownPosition.left}px`,
            top: `${dropdownPosition.top}px`,
          }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="cart-menu"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <h2 className="text-xs font-medium text-white">My Cart</h2>
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="py-2 max-h-[400px] overflow-y-auto">
            {isLoading ? (
              <div className="px-4 py-3 text-center text-gray-400">
                Loading cart...
              </div>
            ) : error ? (
              <div className="px-4 py-3 text-center text-red-400">
                {error}
                <button
                  className="mt-2 text-xs text-blue-400 hover:underline"
                  onClick={() => {
                    setError(null);
                    setIsLoading(true);
                    fetchCart();
                  }}
                >
                  Retry
                </button>
              </div>
            ) : cart.items.length === 0 ? (
              <div className="px-4 py-3 text-center text-gray-400">
                Your cart is empty
              </div>
            ) : (
              cart.items.map((item: any) => (
                <div
                  key={item.product.id}
                  className="px-4 py-3 hover:bg-gray-700 cursor-pointer"
                  role="menuitem"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src={item.product.image_url}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm">
                        {item.product.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {item.product.currency.symbol}
                        {item.product.price} x {item.product_quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {!isLoading && !error && cart.items.length > 0 && (
            <div className="p-3 border-t border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400 text-sm">Total:</span>
                <span className="text-white font-medium">
                  {cart.items[0].product.currency.symbol}
                  {cart.total.toFixed(2)}
                </span>
              </div>
              <Link
                href="/dashboard/cart"
                className="block w-full py-2 text-center text-white text-sm bg-[#587BF2] hover:bg-[#4665D1] rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Go to Cart
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
