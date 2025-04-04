"use client";

import React, { useEffect, useState } from "react";
import CartItem from "@/components/Cart/CartItem";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";
import axios from "axios";

// Dummy data for demonstration
const dummyCartData = {
  items: [
    {
      product_id: 1,
      product_quantity: 2,
      name: "Xbox Gift Card",
      price: 179.55,
      originalPrice: 399.0,
      currency: {
        symbol: "$",
      },
      image_url:
        "https://s3-alpha-sig.figma.com/img/85e5/5f0f/2b70e95783db0a996906b2e2ac729c33?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r0wzt4e0RKDnz4XDi1jACKJTX6AizgRsYNZCpNV0zoi8KMI8KEtC6iooqAY-b2eZiyzrhHr6hfMfwNSQW1SYTRhHSf2hlyX4cjg8M~wlzvQhLYF1xjWuL7IALBsqrAG9bSPI6OcleQZybNxQmfXWxphnE8z0S-3Z~zOzQmJ-ZBFpqQ4xw5ugSHqeaeW3AbRAZxafuAuB5uGsz-cSnjufSBcgKsNjATbAWtX4ZcG-4NnwOJmXGZ3iYB1G23wBdThvCCQs2yutkL1AJBUpTN52LONlNhJ0sqBxV-uVxHRtXAl4KEVGx2gEov1LyUztR6TzhEvWKE90cN0Tndjqx2tsTw__",
      category: "Gaming",
    },
    {
      product_id: 2,
      product_quantity: 1,
      name: "PlayStation Gift Card",
      price: 199.99,
      originalPrice: 299.99,
      currency: {
        symbol: "$",
      },
      image_url:
        "https://s3-alpha-sig.figma.com/img/adcd/d1a9/fb6e67294d8845b0ab1b5c592e6d0621?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ccM~4jY8Meuskq1yTsqafxzpyPWAOiDFEMObiFV2NSaVMhFXKgJE-t-bipbhPaCaneh-B0AoBXSOpBRhLQsfJ9iXuB3mRQmRcJW6t3caGiSmH6rXGHMhgsjb7i9t0EgRrdJ8JaSL-cc53VXn1b9XhCzZIb0gJeIzvUJQEZSWbZ8jo5vRMUjy-hKxTWfGju494CmZDL02LgD3PPEt6JKk-H2-Quqr2beg8-BGNbOSn7nDiqAk326k38H0eV6s0qqGFZACIHrEetSamNx8uQVbE1OpMjgLUzEF5qmWlJaahdZnoLTY93q6ObbcFhPwts3KIiAPfd7ssrATMjuQZexUHQ__",
      category: "Gaming",
    },
    {
      product_id: 3,
      product_quantity: 3,
      name: "Nintendo Gift Card",
      price: 149.99,
      originalPrice: 249.99,
      currency: {
        symbol: "$",
      },
      image_url:
        "https://s3-alpha-sig.figma.com/img/02e2/d8ae/6dab05a57474da6ea9d20aebae27a65a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qKpyE3f0E3A93ZRKlGRhz77Rfr3hjl63DMbHGjynUb6QKs9p2jEyIJvPA5KdG3PAwi~~t3vQBR~oymD-dm7SFl03O4CQHPKqGAYGXRb-ZgxNbRpvB24xwKliIVjKMd1NGviCoFVCdcDEkmrC7XdzhzYIN2oY5UBfdGJTc7qS~xM3smMputS7YPBH0ssLMlDpXfNjGTUehYPxb37FmjN7UO1eWaPUTlnMEVyOQrvfoH3I68~TvnUEi3CUHjTYNxLKkp~Zgwgv99m8wtq2ztoDinLpDDZODMsP2J7-7~amHaRmUVX7nUH0Yde~naoFZ494vcUcH5bWLbEdS0bV~Ml8jw__",
      category: "Gaming",
    },
  ],
  total: 1008.51, // Sum of (price * quantity) for all items
};

const CartPage = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Set mounted state to handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load dummy data for demonstration
  // useEffect(() => {
  //   if (!mounted) return;

  //   // // For demonstration, use dummy data instead of API call
  //   // setCart(dummyCartData);
  //   // setIsLoading(false);

  //   // Comment out the actual API call for now

  //   const fetchCart = async () => {
  //     try {
  //       const response = await axios.get("/api/cart");
  //       if (response.data) {
  //         console.log(response.data);
  //         // setCart({
  //         //   items: response.data.items || [],
  //         //   total: response.data.total || 0,
  //         // });
  //       }
  //     } catch (error: any) {
  //       console.error("Error fetching cart:", error);
  //       setError("Failed to load cart data. Please try again later.");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchCart();
  // }, [mounted, setCart]);

  // Don't render anything until after hydration
  if (!mounted) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-400">Loading...</div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-400">Loading cart...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-red-400">
          {error}
          <button
            className="mt-2 text-blue-400 hover:underline block mx-auto"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  const savings = cart.items.reduce((total, item) => {
    const originalPrice = parseFloat(item.originalPrice?.toString() || "0");
    const currentPrice = item.price;
    return total + (originalPrice - currentPrice) * item.product_quantity;
  }, 0);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Cart Title */}
      <h1 className="text-xl font-medium mb-8 text-white">
        Cart <span className="text-gray-400">({cart.items.length} items)</span>
      </h1>

      {cart.items.length === 0 ? (
        <div className="text-center text-gray-400 py-8">Your cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item: any) => (
              <CartItem
                key={item.product.id}
                image={item.product.image_url}
                title={item.product.name}
                price={item.product.price.toString()}
                originalPrice={item.product.originalPrice?.toString()}
                quantity={item.product_quantity}
                currency={item.product.currency}
              />
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#1e2328] rounded-lg p-6 lg:sticky lg:top-8">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg mb-6">
                Checkout
              </button>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-gray-400">
                    Subtotal{" "}
                    <span className="text-white">
                      ({cart.items.length} items)
                    </span>
                  </div>
                  <div className="text-base text-white">
                    {/* {cart.items[0]?.product?.currency.symbol} */}
                    {cart.total.toFixed(2)}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-gray-400">Savings</div>
                  <div className="text-green-500">
                    {/* -{cart.items[0]?.product?.currency.symbol} */}
                    {savings.toFixed(2)}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div className="text-white">Estimated total</div>
                  <div className="text-green-500 text-lg">
                    <span className="text-white">
                      {/* {cart.items[0]?.product?.currency.symbol} */}
                    </span>{" "}
                    {(cart.total - savings).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
