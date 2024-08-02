import axios from "axios";
import Product from "@/components/Product/Product";
import BankCard from "@/components/Card/BankCards/BankCard";
import BankSlider from "@/components/Card/BankCards/BankSlider";
import { cookies } from "next/headers";
import Link from "next/link";
import DataBundle from "@/components/Product/DataBundle";

const fetchProducts = async (accessToken: any, type: string) => {
  const response = await axios.get(
    `${process.env.API_ENDPOINT}/products?category=${type}`,
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
      {/* <div className="w-full flex justify-center">Other Services</div> */}
      <div className="bg-[#12181F] rounded-t-lg rounded-b-lg py-8">
        <div className="w-full flex flex-wrap gap-x-12 px-4 justify-center mx-auto xl:max-w-[1700px]">
          <div className="w-full flex justify-between mb-3 lg:px-14">
            <span>Bank Services</span>
            {/* <Link href="/dashboard/other-services/Bank">
              <span className="cursor-pointer">View all</span>
            </Link> */}
          </div>
        </div>
        <div className="w-full lg:px-14">
          <BankSlider products={bankProducts} />
          {/* <BankCard />
        <BankCard />
        <BankCard />
        <BankCard /> */}
        </div>
      </div>

      <div className="w-full flex flex-wrap px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
        {/* Data bundles */}
        <div className="w-full flex justify-center lg:justify-start lg:px-14 mt-8 bg-[#12181F] py-6 rounded-t-lg">
          <span>Data Bundles</span>
          {/* <Link href={"/dashboard/other-services/Bundle"}>
            {" "}
            <span className="cursor-pointer">View all</span>
          </Link> */}
        </div>
        {dataProducts.map((product: any) => (
          // <Product key={product.title} productInfo={product} />
          <DataBundle key={product.title} productInfo={product} />
        ))}
        <div className="w-full bg-[#12181F] py-6 rounded-b-lg" />
      </div>
    </div>
  );
};

export default OtherServicesPage;
