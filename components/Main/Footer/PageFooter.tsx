import React from "react";
import Image from "next/image";
import AppLayout from "../../Layout/AppLayout";
import FooterBlock from "./FooterBlock";
import FooterCircleSvg from "@/components/UI/SvgIcons/FooterCircleSvg";

const PageFooter = () => {
  return (
    <div className="bg-secondary py-12 text-white ">
      <AppLayout>
        <div className="w-full flex flex-col gap-y-4 items-center justify-center  lg:flex-row lg:justify-between lg:gap-x-0 lg:items-start">
          <FooterBlock
            headerTitle="Support"
            items={[
              { title: "Create an Account", url: "/signup" },
              { title: "How to Buy Gift Cards", url: "#" },
              { title: "How to Sell Gift Cards", url: "#" },
              // { title: "FAQ", url: "#" },
              {
                title: "Contact Us",
                url: "https://twitter.com/apkxchange?s=11&t=x2jDIhTvNHUvLS9lc9m2Gg",
              },
            ]}
          />
          <FooterBlock
            headerTitle="Company"
            items={[
              { title: "About", url: "/about" },
              {
                title: "Support",
                url: "https://twitter.com/apkxchange?s=11&t=x2jDIhTvNHUvLS9lc9m2Gg",
              },
              { title: "Buy", url: "/dashboard/exchange/buy" },
              { title: "Sell", url: "/dashboard/exchange/sell" },
            ]}
          />
          <FooterBlock
            headerTitle="Social"
            items={[
              { title: "Facebook", url: "#" },
              {
                title: "Twitter",
                url: "https://twitter.com/apkxchange?s=11&t=x2jDIhTvNHUvLS9lc9m2Gg",
              },
              { title: "Instagram", url: "#" },
            ]}
          />
          <FooterBlock
            headerTitle="Legal"
            items={[
              { title: "Terms & Conditions", url: "/terms-of-service" },
              { title: "Privacy Policy", url: "/privacy-policy" },
              { title: "Refund Policy", url: "/refund-policy" },
            ]}
          />
        </div>

        <div className="w-full flex flex-col items-center gap-y-2 mt-8 lg:mt-1">
          <Image
            src={"/images/apklogo-new.png"}
            width={120}
            height={120}
            alt="apk logo"
          />
          <div className="flex gap-x-2 items-center">
            <FooterCircleSvg />
            <p className="text-[10px] text-gray-600 lg:text-[12px]">
              2023 APKXCHANGE
            </p>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default PageFooter;
