import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const CartItem = ({
  image,
  title,
  price,
  originalPrice,
}: {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
}) => {
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
          <span className="text-green-500 text-sm font-light">${price}</span>
          <span className="text-gray-500 text-sm font-light line-through">
            ${originalPrice}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Quantity controls */}
          <div className="flex items-center bg-blue-500 rounded-md">
            <button className="px-3 py-1 text-white hover:bg-blue-600 transition-colors">
              -
            </button>
            <span className="px-4 py-1 text-white text-sm">1</span>
            <button className="px-3 py-1 text-white hover:bg-blue-600 transition-colors">
              +
            </button>
          </div>
          <button className="text-gray-400 hover:text-gray-300 text-xs">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
