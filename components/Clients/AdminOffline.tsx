"use client";

import React from "react";
import Lottie from "lottie-react";
import offlineAnimation from "@/components/Animations/Lottie/offline.json";

const AdminOffline = () => {
  return (
    <div className="w-full h-screen bg-secondary flex flex-col justify-center items-center">
      <div className="w-[200px] h-[200px]">
        <Lottie animationData={offlineAnimation} />
      </div>
      <div className="text-center">
        <p className="text-orange-400 text-sm lg:text-base">
          Admin is Offline at the moment. Please come back later
        </p>
      </div>
    </div>
  );
};

export default AdminOffline;
