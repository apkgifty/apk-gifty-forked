"use client";

import Lottie from "lottie-react";
import BlueRingAnimation from "@/components/Animations/Lottie/blueloading.json";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-screen text-white flex justify-center items-center">
      <div className="w-[170px] h-[170px]">
        <Lottie animationData={BlueRingAnimation} />
      </div>
    </div>
  );
}
