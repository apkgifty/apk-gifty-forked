import Link from "next/link";
import React from "react";
import LanguageSelect from "../UI/LanguageSelect";
import MenuButton from "../UI/MenuButton";
import NavigationItem from "./NavigationItem";
import Image from "next/image";

const mainNavigationLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Buy GiftCards", link: "/dashboard/exchange/buy" },
  { title: "Contact", link: "#" },
  { title: "Promotion", link: "#" },
  { title: "Blog", link: "#" },
];

const Navigation = () => {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="flex gap-12">
        <Image
          src="/images/apklogo-new.png"
          width={100}
          height={100}
          alt="apk logo"
          className="-mt-2"
        />
        <div className="hidden lg:flex space-x-6">
          {mainNavigationLinks.map((navItem) => (
            <NavigationItem
              key={navItem.title}
              title={navItem.title}
              link={navItem.link}
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex lg:gap-x-3">
        <div className="space-x-1">
          <Link href={"/login"}>
            <button className="bg-tertiary px-3 py-2 text-sm font-medium rounded-lg">
              Login
            </button>
          </Link>
          <Link href={"/signup"}>
            {" "}
            <button className="bg-appviolet px-3 py-2 text-sm font-medium rounded-lg">
              Signup
            </button>
          </Link>
        </div>
        <LanguageSelect />
      </div>
      <div className="lg:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default Navigation;
