"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  productInfo: any;
}

const Product: React.FC<Props> = ({
  // title,
  // price,
  // category,
  // iconUrl,
  // imageUrl,
  productInfo,
}) => {
  const { name, price, category, icon, image_url, description, currency } =
    productInfo;

  const pathname = usePathname();

  const splitPathname = pathname.split("/");
  const pathTag = splitPathname[splitPathname.length - 1];

  // Add pid to params so it can be picked from url
  const prod = {
    ...productInfo,
    pid: productInfo.id,
    currency: currency.symbol,
  };

  const pathEnd =
    pathTag === "buy" || pathTag === "other-services" ? "buy" : "sell";

  return (
    <div className="w-full lg:w-[300px] ">
      <Link
        href={{
          pathname: `/dashboard/exchange/product/${pathEnd}`,
          query: prod,
        }}
      >
        {/* <div
        className="w-[250px] h-[150px] bg-red-700 rounded-lg bg-cover bg-center"
        style={{ background: `url(${imageUrl})` }}
      ></div> */}
        <div className="w-full h-[200px] relative">
          <Image src={image_url} alt={name} fill objectFit="cover" />
        </div>

        <div
          className={`flex justify-between ${
            category !== "Bundle" &&
            category !== "Bank" &&
            "border-b border-gray-600"
          } py-3`}
        >
          <p className="text-white text-sm">{name}</p>
          <p className="text-green-400 text-xs px-1 py-1 border-2 border-green-400 rounded-sm">
            {/* {`${symbol}${price}`} */}
            {currency.symbol + price}
          </p>
        </div>
        {category === "Bank" || category === "Bundle" ? null : (
          <div className="py-2 flex justify-between items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              {/* <img src={"/apple.svg"} width={20} /> */}
              <p className="text-xs text-white">{description}</p>
            </div>

            <div>
              {productInfo.quantity > 0 ? (
                <span className="text-white text-xs">
                  Qty: {productInfo.quantity}
                </span>
              ) : (
                <span className="text-xs text-red-600">Sold Out</span>
              )}
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Product;
