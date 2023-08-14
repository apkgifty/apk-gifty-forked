import { cookies } from "next/headers";
import axios from "axios";
import Product from "@/components/Product/Product";
import { redirect } from "next/navigation";

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

const SellPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access");

  if (accessToken === undefined) {
    return redirect("/login");
  }

  const products = await fetchProducts(accessToken?.value);
  return (
    <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
      {products.map(
        (product: any) =>
          product.type === "sell" && (
            <Product key={product.imageUrl} productInfo={product} />
          )
      )}
    </div>
  );
};

export default SellPage;
