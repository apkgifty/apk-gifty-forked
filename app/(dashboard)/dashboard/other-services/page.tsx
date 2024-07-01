import axios from "axios";
import Product from "@/components/Product/Product";
import BankCard from "@/components/Card/BankCards/BankCard";
import BankSlider from "@/components/Card/BankCards/BankSlider";
import { cookies } from "next/headers";

const fetchProducts = async (accessToken: any, type: string) => {
  const response = await axios.get(
    `https://test.apkxchange.com/api/products?category=${type}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  // console.log(response.data.data);

  return response.data.data;
};
const OtherServicesPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  const bankProducts = await fetchProducts(accessToken?.value, "Bank");

  const dataProducts = await fetchProducts(accessToken?.value, "Bundle");

  //   console.log(dataProducts);

  return (
    <div className="w-full text-white">
      <div className="w-full flex justify-center">Other Services</div>
      <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
        <div className="w-full flex justify-between lg:px-14">
          <span>Bank Services</span>
          <span className="cursor-pointer">View all</span>
        </div>
      </div>
      <div className="w-full mt-10 lg:px-14">
        <BankSlider />
        {/* <BankCard />
        <BankCard />
        <BankCard />
        <BankCard /> */}
      </div>

      <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
        {/* Data bundles */}
        <div className="w-full flex justify-between lg:px-14 mt-8">
          <span>Data Bundles</span>
          <span className="cursor-pointer">View all</span>
        </div>
        {dataProducts.map((product: any) => (
          <Product key={product.title} productInfo={product} />
        ))}
      </div>
    </div>
  );
};

export default OtherServicesPage;
