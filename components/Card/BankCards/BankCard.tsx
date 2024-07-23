import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  productInfo: any;
}
const BankCard: React.FC<Props> = ({ productInfo }) => {
  const { name, price, category, icon, image_url, description, currency } =
    productInfo;

  const pathname = usePathname();

  const splitPathname = pathname.split("/");
  const pathTag = splitPathname[splitPathname.length - 1];

  // Add pid to params so it can be picked from url
  const prod = { ...productInfo, pid: productInfo.id };

  const pathEnd =
    pathTag === "buy" || pathTag === "other-services" ? "buy" : "sell";
  return (
    <Link
      href={{
        pathname: `/dashboard/exchange/product/${pathEnd}`,
        query: prod,
      }}
    >
      <div className="w-[105px] h-[105px] lg:w-[250px] lg:h-[250px] relative ">
        <Image
          src={image_url}
          alt="bank-name"
          fill
          objectFit="contain"
          className=" absolute"
        />
      </div>
      {/* <div>
        <span>Bank Name</span>
      </div> */}
    </Link>
  );
};

export default BankCard;
