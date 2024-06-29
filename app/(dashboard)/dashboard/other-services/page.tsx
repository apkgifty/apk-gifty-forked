import Product from "@/components/Product/Product";
import React from "react";
import BankCard from "@/components/Card/BankCards/BankCard";
import BankSlider from "@/components/Card/BankCards/BankSlider";

const banks = [
  {
    title: "Amazon Gift Card",
    price: "399.00",
    category: "Amazon product",
    image_url: "/images/gift1.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Walmart Gift Card",
    price: "399.00",
    category: "Walmart product",
    image_url: "/images/gift3.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "ITunes Gift Card",
    price: "399.00",
    category: "Apple product",
    image_url: "/images/gift3.png",
    iconUrl: "/apple.svg",
  },
  //   {
  //     title: "Flipkart Gift Card",
  //     price: "399.00",
  //     category: "Flipkart product",
  //     image_url: "/images/gift1.png",
  //     iconUrl: "/apple.svg",
  //   },
  //   {
  //     title: "Vanilla Gift Card",
  //     price: "399.00",
  //     category: "Vanilla product",
  //     image_url: "/images/gift3.png",
  //     iconUrl: "/apple.svg",
  //   },
  //   {
  //     title: "Walmart Gift Card",
  //     price: "399.00",
  //     category: "Walmart product",
  //     image_url: "/images/gift1.png",
  //     iconUrl: "/apple.svg",
  //   },
  //   {
  //     title: "ITunes Gift Card",
  //     price: "399.00",
  //     category: "Apple product",
  //     image_url: "/images/gift1.png",
  //     iconUrl: "/apple.svg",
  //   },
  //   {
  //     title: "Amazon Gift Card",
  //     price: "399.00",
  //     category: "Amazon product",
  //     image_url: "/images/gift3.png",
  //     iconUrl: "/apple.svg",
  //   },
];

const bundles = [
  {
    title: "Amazon Gift Card",
    price: "399.00",
    category: "Amazon product",
    image_url: "/images/gift1.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Walmart Gift Card",
    price: "399.00",
    category: "Walmart product",
    image_url: "/images/gift3.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "ITunes Gift Card",
    price: "399.00",
    category: "Apple product",
    image_url: "/images/gift3.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Flipkart Gift Card",
    price: "399.00",
    category: "Flipkart product",
    image_url: "/images/gift1.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Vanilla Gift Card",
    price: "399.00",
    category: "Vanilla product",
    image_url: "/images/gift3.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Walmart Gift Card",
    price: "399.00",
    category: "Walmart product",
    image_url: "/images/gift1.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "ITunes Gift Card",
    price: "399.00",
    category: "Apple product",
    image_url: "/images/gift1.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Amazon Gift Card",
    price: "399.00",
    category: "Amazon product",
    image_url: "/images/gift3.png",
    iconUrl: "/apple.svg",
  },
];

const OtherServicesPage = () => {
  return (
    <div className="w-full text-white">
      <div className="w-full flex justify-center">Other Services</div>
      <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
        <div className="w-full flex justify-between lg:px-14">
          <span>Bank Services</span>
          <span className="cursor-pointer">View all</span>
        </div>
      </div>
      <div className="w-full  relative">
        <BankSlider />
      </div>

      <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 justify-center mx-auto mt-8 xl:max-w-[1700px]">
        {/* Data bundles */}
        <div className="w-full flex justify-between lg:px-14">
          <span>Data Bundles</span>
          <span className="cursor-pointer">View all</span>
        </div>
        {bundles.map((bundle: any) => (
          <Product key={bundle.title} productInfo={bundle} />
        ))}
      </div>
    </div>
  );
};

export default OtherServicesPage;
