import AppLayout from "@/components/Layout/AppLayout";
import React from "react";
import Cookiepolicy from "../../cookie-policy.mdx";
import MdxWrapper from "@/components/MdxWrapper";

const CookiePolicy = () => {
  return (
    <div className="w-full text-white py-8">
      <AppLayout>
        <h1 className="text-center text-xl lg:text-3xl font-bold lg:pb-10">
          Cookie Policy
        </h1>
        <div className="space-y-4 px-3 lg:px-0 text-sm ">
          <MdxWrapper>
            <Cookiepolicy />
          </MdxWrapper>
        </div>
      </AppLayout>
    </div>
  );
};

export default CookiePolicy;
