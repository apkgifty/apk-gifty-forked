import React from "react";
import SideNavItem from "./SideNavItem";
import SideNavItems from "./SideNavItems";
import InboxSvg from "../../UI/SvgIcons/InboxSvg";
import VerifiedSvg from "../../UI/SvgIcons/VerifiedSvg";
import SecondaryNavs from "./SecondaryNavs";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 h-screen py-8 overflow-y-auto bg-secondary  border-r rtl:border-r-0 rtl:border-l border-[#161D26] ">
      <div className="w-full flex justify-center border-b border-[#161D26] pb-8">
        <a href="#">
          <img className="w-auto h-7" src="/images/apklogo.png" alt="" />
        </a>
      </div>

      <div className="flex flex-col  items-center gap-y-2 py-4">
        <img
          className="object-cover w-16 h-16 rounded-lg"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
          alt=""
        />

        <div className="text-center">
          <h1 className="text-sm font-semibold text-white capitalize ">
            APK William
          </h1>
          <div className="flex justify-center items-center gap-x-1">
            <p className="text-xs text-white font-light ">Verified </p>
            <VerifiedSvg />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1  px-5 mt-6">
        <SideNavItems />
        <SecondaryNavs />
      </div>
    </aside>
  );
};

export default Sidebar;
