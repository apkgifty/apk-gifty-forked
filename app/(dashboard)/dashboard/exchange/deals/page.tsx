import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import BuyProductCard from "@/components/Product/BuyProductCard";
import NoProducts from "@/components/Product/NoProducts";

const bannerImageUrls = {
  xbox: "https://s3-alpha-sig.figma.com/img/4a07/69fc/159dd35aa477865a416bd6d97b52be0a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j1HROnA-RT9CvmmflsO3pBkEfIxC-wgZRBIxE814Wp6tDwHhZlG9umxUrN9B94N2Do-ocT0vaAN7Fe2Ym9r2iqxiUj-QLF0wUIVPhGKcbAxFkIu7RJbESYQ61pE62xMDk~IJIrz~5OdjQrZVtTYN3y4OHcIESrRWYNwSFfq4ueLMiroud23hJ20idg4mPWcjH3YMkL7VeCnjEQ7itAVdQsh~68AkUOFgtO5Y0P58omehPKrsGnoSIum6RWwXRF~3wIq8DfGcK8yd-aW9t6Nw-lUzd-d36zj-AtzHVLSnFkYMA6pSnpxX25cFBoWT9ADz8FoMRGLrTgJHgnUY09Joew__",
  psn: "https://s3-alpha-sig.figma.com/img/84b3/d099/89ce74c84b0456f18351e27c6d5728d3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PPz8Vwhuu7kjp2pPv4oAqGbswEfNZAtPH6M90E82yPdYamVgymMczT2pFrWG-ZqK7PQwqXLrdpnaVTlCkwgk4RfgUP-z9KEIOUK7KhKWuFqiazXIlTQTriqn99JvOGUqu3-NOEzNz5bhwZA40jDzBRtC49vzYTHTsZZiXgmq9c6AzfwJpdLOcIDVU4Z1Hn3Uu9jfcV8oPuGloa5yHAdqE-Bn3IE~F1dKlT3vUU4lySQQh3ETc7i10I8rJu~WouIHsgtYEHBDerrHrQ0~4Y~r4QEbj-NGgv7px4DeqXs5ozTiVGOu45yNJiPMJ~AP-Vaxk-de7HgD0VGUdNZTpQxu7w__",
  nintendo:
    "https://s3-alpha-sig.figma.com/img/2c9d/0239/130073954f53dd4c3659f3828b715c30?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kaSoosFANLEIaHqAP5wdT58GdZ4MgSqPNhQJioNsPlm-rLkKmVfK0nAnD5CvJ0b9xu99Uttdj8Fjn~T5zFJEBKlDQDw1hSZ8ujz4xSzuSKuNd0omzsbyju3dDLO6vWlrI3ec6CjRAMCjy3e9JmiNl1DE7hy5TobSKGGgj1Dv6~hCAmdqPQagkQYtSN1Em0gb0f-8x5jK2Z4N9YjiLTz-bPsd5FaigMURgIvc-3SXufg4VbuJwQtTqiON0WdwpvcElJko1QIQGBT7KacfxZG0ZwFzr1xpzdj6zsFTCmnJeWAlwcFD8FRuU4nGeUpOdL-ftKpTIaG4Hb4TcgvAnYPFXg__",
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
        className="py-48 bg-[#0a1030]"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${
            dealCategory &&
            bannerImageUrls[dealCategory as keyof typeof bannerImageUrls]
          })`,
        }}
      >
        <div className="ml-24">
          <p className="text-4xl font-bold text-white">
            Enjoy the <span className="text-blue-400">Best</span> <br />
            PSN DEALS
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
