import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import BuyProductCard from "@/components/Product/BuyProductCard";
import NoProducts from "@/components/Product/NoProducts";

const bannerImageUrls = {
  xbox: "/images/xbox_cover.png",
  psn: "/images/psn_cover.png",
  nintendo: "/images/nintendo_cover.png",
  daily: "/images/exploredeals.png",
};

const fetchProducts = async (accessToken: any, type: string) => {
  const response = await axios.get(
    `${process.env.API_ENDPOINT}/products?product_category=${type}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  // console.log(response.data.data);

  return response.data.data;
};
const DealsPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access");

  if (accessToken === undefined) {
    return redirect("/login");
  }

  const dealCategory = searchParams?.category;

  const products = await fetchProducts(
    accessToken?.value,
    dealCategory as string
  );

  const filteredProducts = products.filter(
    (product: any) =>
      product.currency.name === searchParams?.currency && product.type === "buy"
  );

  return (
    <div>
      <section
        className="py-12 lg:py-48 bg-black bg-contain lg:bg-cover bg-right bg-no-repeat"
        style={{
          // backgroundSize: "cover",
          backgroundImage: `url(${
            dealCategory &&
            bannerImageUrls[dealCategory as keyof typeof bannerImageUrls]
          })`,
        }}
      >
        <div className="ml-24">
          <p className="lg:text-4xl font-bold text-white">
            Enjoy the <span className="">Best</span> <br />
            {dealCategory === "psn"
              ? "PSN DEALS"
              : dealCategory === "xbox"
              ? "XBOX DEALS"
              : dealCategory === "nintendo"
              ? "NINTENDO DEALS"
              : "DEALS"}
          </p>
        </div>
      </section>
      <div className="w-full flex flex-wrap gap-x-12 gap-y-12 justify-center mx-auto px-4 mt-8 xl:max-w-[1700px] pb-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: any) => (
            // <Product key={product.id} productInfo={product} />
            <BuyProductCard key={product.id} productInfo={product} />
          ))
        ) : (
          <NoProducts />
        )}
      </div>
    </div>
  );
};

export default DealsPage;
