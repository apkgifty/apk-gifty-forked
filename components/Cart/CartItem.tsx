import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface CartItemProps {
  id: string;
  image: string;
  title: string;
  price: string | number;
  originalPrice?: string | number;
  quantity?: number;
  currency?: {
    symbol: string;
  };
  updateCartHandler: (
    productId: string,
    productQuantity: number,
    updateType: string
  ) => void;
  removeCartItemHandler: (productId: string) => void;
}

const CartItem = ({
  id,
  image,
  title,
  price,
  originalPrice,
  quantity,
  currency = { symbol: "$" },
  updateCartHandler,
  removeCartItemHandler,
}: CartItemProps) => {
  return (
    <div className="flex bg-[#1e2328] rounded-lg overflow-hidden">
      {/* Full width image with no padding */}
      <div className="w-[240px] h-[160px] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="text-green-500 h-5 w-5" />
          <span className="text-green-500 text-sm">Added to cart</span>
        </div>

        <h3 className="text-lg mb-2 text-white font-light">{title}</h3>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-500 text-sm font-light">
            {currency.symbol}
            {typeof price === "number" ? price.toFixed(2) : price}
          </span>
          {originalPrice && (
            <span className="text-gray-500 text-sm font-light line-through">
              {currency.symbol}
              {typeof originalPrice === "number"
                ? originalPrice.toFixed(2)
                : originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* Quantity controls */}
          <div className="flex items-center bg-blue-500 rounded-md">
            <button
              className="px-3 py-1 text-white hover:bg-blue-600 transition-colors"
              onClick={() =>
                updateCartHandler(id, quantity as number, "decrement")
              }
            >
              -
            </button>
            <span className="px-4 py-1 text-white text-sm">{quantity}</span>
            <button
              className="px-3 py-1 text-white hover:bg-blue-600 transition-colors"
              onClick={() =>
                updateCartHandler(id, quantity as number, "increment")
              }
            >
              +
            </button>
          </div>
          <button
            className="text-gray-400 hover:text-gray-300 text-xs"
            onClick={() => removeCartItemHandler(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
