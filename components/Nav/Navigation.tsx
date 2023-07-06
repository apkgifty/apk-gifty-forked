import Link from "next/link";
import React from "react";
import LanguageSelect from "../UI/LanguageSelect";
import MenuButton from "../UI/MenuButton";

const Navigation = () => {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="flex gap-12">
        <img src="/images/apklogo.png" />
        <div className="hidden lg:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/">Buy Giftcards</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Promotion</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Blog</Link>
        </div>
      </div>
      <div className="hidden   lg:block">
        <LanguageSelect />
      </div>
      <div className="lg:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default Navigation;
