import { redirect } from "next/navigation";
import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import BankCard from "@/components/Card/BankCards/BankCard";
import Product from "@/components/Product/Product";

// const fetchProducts = async (accessToken: any, type: string) => {
//   const response = await axios.get(
//     `https://test.apkxchange.com/api/products?category=${type}`,
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   return response.data.data;
// };

const OtherServicesAllPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  // if (params.slug !== "Bank" && params.slug !== "Bundle") {
  //   redirect("/404");
  // }

  // const cookieStore = cookies();
  // const accessToken = cookieStore.get("accessToken");

  // const data = await fetchProducts(accessToken, params.slug);

  // console.log(data);

  // let lists = null;
  // let title = null;

  // if (params.slug === "Bank") {
  //   title = "All Banks";
  //   lists = data.map((item: any) => <BankCard key={item.id} />);
  // } else if (params.slug === "Bundle") {
  //   title = "All Data Bundles";
  //   lists = data.map((item: any) => (
  //     <Product key={item.id} productInfo={item} />
  //   ));
  // }

  return (
    <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
      {/* <div className="w-full flex justify-center">
        <h4 className="text-white text-xl lg:text:3xl">{title}</h4>
      </div>
      {lists} */}
    </div>
  );
};

export default OtherServicesAllPage;
