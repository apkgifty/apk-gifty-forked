import React from "react";
import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";

import Product from "@/components/Product/Product";

// const products = [
//   {
//     title: "Amazon Gift Card",
//     price: "399.00",
//     category: "Amazon product",
//     imageUrl: "/images/gift1.png",
//     iconUrl: "/apple.svg",
//   },
//   {
//     title: "Walmart Gift Card",
//     price: "399.00",
//     category: "Walmart product",
//     imageUrl: "/images/gift3.png",
//     iconUrl: "/apple.svg",
//   },
//   {
//     title: "ITunes Gift Card",
//     price: "399.00",
//     category: "Apple product",
//     imageUrl: "/images/gift3.png",
//     iconUrl: "/apple.svg",
//   },
//   {
//     title: "Flipkart Gift Card",
//     price: "399.00",
//     category: "Flipkart product",
//     imageUrl: "/images/gift1.png",
//     iconUrl: "/apple.svg",
//   },
//   {
//     title: "Vanilla Gift Card",
//     price: "399.00",
//     category: "Vanilla product",
//     imageUrl: "/images/gift3.png",
//     iconUrl: "/apple.svg",
//   },
//   {
//     title: "Walmart Gift Card",
//     price: "399.00",
//     category: "Walmart product",
//     imageUrl: "/images/gift1.png",
//     iconUrl: "/apple.svg",
//   },
//   {
//     title: "ITunes Gift Card",
//     price: "399.00",
//     category: "Apple product",
//     imageUrl: "/images/gift1.png",
//     iconUrl: "/apple.svg",
//   },
//   {
//     title: "Amazon Gift Card",
//     price: "399.00",
//     category: "Amazon product",
//     imageUrl: "/images/gift3.png",
//     iconUrl: "/apple.svg",
//   },
// ];

const fetchProducts = async (accessToken: any) => {
  const response = await axios.get(
    "https://backend.apkxchange.com/api/products",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  // console.log(response.data.data);

  return response.data.data;
};

const BuyPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access");

  // if (accessToken === undefined) {
  //   return redirect("/login");
  // }

  const products = await fetchProducts(accessToken?.value);

  return (
    <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
      {products.map(
        (product: any) =>
          product.type === "buy" && (
            <Product key={product.id} productInfo={product} />
          )
      )}
    </div>
  );
};

export default BuyPage;
