"use client";

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

import InboxSvg from "../../UI/SvgIcons/InboxSvg";
import SideNavItem from "./SideNavItem";
import LogoutIcon from "@mui/icons-material/Logout";

// const links = [{ title: "Inbox", url: "#", icon: <InboxSvg />, data: "8" }];

const SecondaryNavs = () => {
  const router = useRouter();

  const [cookies, setCookie, removeCookie] = useCookies(["access"]);

  console.log(cookies);

  const logoutHandler = () => {
    removeCookie("access", { path: "/" });
    localStorage.removeItem("userInfo");

    router.replace("/login");
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        {/* <h2 className="text-base font-light text-[#C2C2C2] ">Insights</h2> */}
      </div>
      <nav className="mt-4 -mx-3 space-y-3 ">
        {/* {links.map((link) => (
          <SideNavItem
            key={link.title}
            title={link.title}
            url={link.url}
            icon={link.icon}
            badgeData={link.data}
          />
        ))} */}
        <div
          className={
            "flex items-center px-3 py-2 bg-violet-800 cursor-pointer text-white bg-transparent transition-colors duration-300 transform rounded-lg hover:bg-[#587bf2] hover:text-white "
          }
          onClick={logoutHandler}
        >
          <LogoutIcon />
          <span className="mx-2 text-sm font-medium">Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default SecondaryNavs;
