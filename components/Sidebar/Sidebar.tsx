import React from "react";
import SideNavItem from "./SideNavItem";
import SideNavItems from "./SideNavItems";
import InboxSvg from "../UI/SvgIcons/InboxSvg";
import VerifiedSvg from "../UI/SvgIcons/VerifiedSvg";

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
        <nav className="-mx-3 space-y-3 ">
          <SideNavItems />
        </nav>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-light text-[#C2C2C2] ">Insights</h2>
          </div>
          <nav className="mt-4 -mx-3 space-y-3 ">
            <a
              className="flex items-center px-3 py-2 text-[#C2C2C2] transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <InboxSvg />
              <span className="mx-2 text-sm font-medium">Inbox</span>
            </a>
            {/* <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-x-2 ">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span>Blog navigation</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button> */}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
