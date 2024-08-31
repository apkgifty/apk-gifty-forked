"use client";

import React, { useState, useEffect } from "react";

import SideNavItems from "./SideNavItems";
import SecondaryNavs from "./SecondaryNavs";
import ExchangeSvg from "@/components/UI/SvgIcons/ExchangeSvg";
import TransactionSvg from "@/components/UI/SvgIcons/TransactionSvg";
import SettingsSvg from "@/components/UI/SvgIcons/SettingsSvg";
import HelpIcon from "@mui/icons-material/Help";
import Image from "next/image";

const links = [
  // { title: "Dashboard", url: "/", icon: <DashboardSvg /> },
  { title: "Exchange", url: "/dashboard/exchange/buy", icon: <ExchangeSvg /> },
  // { title: "Wallet", url: "#", icon: <WalletSvg /> },
  {
    title: "Transaction",
    url: "/dashboard/transaction/history",
    icon: <TransactionSvg />,
  },
  {
    title: "Other Services",
    url: "/dashboard/other-services",
    icon: <TransactionSvg />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings/personal-information",
    icon: <SettingsSvg />,
  },
  {
    title: "FAQ",
    url: "/dashboard/faq",
    icon: <HelpIcon className="text-white" />,
  },
  // { title: "News", url: "#", icon: <NewsSvg /> },
];

const Sidebar = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  useEffect(() => {
    const user: any = localStorage.getItem("userInfo");
    // console.log(JSON.parse(user));
    setUserInfo(JSON.parse(user));
  }, []);

  // console.log(userInfo);
  return (
    <aside className="hidden  lg:flex flex-col w-64 h-screen py-8 overflow-y-auto bg-secondary  border-r rtl:border-r-0 rtl:border-l border-tertiary">
      <div className="w-full flex justify-center items-center cursor-pointer gap-x-1 border-b border-[#161D26] pb-8">
        {/* <Link href="/">
          <Image
            width={130}
            height={130}
            priority
            src="/images/apklogo-new.png"
            alt="site logo"
          />
        </Link> */}
        {/* <div className="text-white text-xs">
          <p>
            APK <br /> XCHANGE
          </p>
        </div> */}
      </div>

      <div className="flex flex-col  items-center gap-y-2 py-4">
        {/* <img
          className="object-cover w-16 h-16 rounded-lg"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
          alt=""
        /> */}
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-400 rounded-full ">
          <span className="font-medium text-gray-600 ">
            {userInfo?.firstname[0].toUpperCase()}
          </span>
        </div>

        <div className="text-center">
          <h1 className="text-sm font-semibold text-white capitalize ">
            {userInfo?.firstname}
          </h1>
          {userInfo?.kyc && (
            <div className="flex justify-center items-center gap-x-1 ">
              <p className="text-xs text-gray-300">Verified</p>
              <Image
                src={"/images/verified.png"}
                width={20}
                height={20}
                alt="verified-badge"
              />
            </div>
          )}
          {/* <div className="flex justify-center items-center gap-x-1">
            <p className="text-xs text-white font-light ">Verified </p>
            <VerifiedSvg />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1  px-5 mt-6">
        <SideNavItems linkItems={links} />
        <SecondaryNavs kycStatus={userInfo?.kyc === null} />
      </div>
    </aside>
  );
};

export default Sidebar;
