"use client";

import Lottie from "lottie-react";
import BlueRingAnimation from "@/components/Animations/Lottie/blueloading.json";
import NoProductsAnimation from "@/components/Animations/Lottie/noproducts.json";

export default function NoProducts() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-fulltext-white flex justify-center items-center">
      <div className="w-[170px] h-[170px]">
        <Lottie animationData={NoProductsAnimation} />
      </div>
    </div>
  );
}
