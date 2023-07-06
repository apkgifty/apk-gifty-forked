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
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/" className="hover:underline">
            Buy Giftcards
          </Link>
          <Link href="/" className="hover:underline">
            Contact
          </Link>
          <Link href="/" className="hover:underline">
            Promotion
          </Link>
          <Link href={"/"} className="hover:underline">
            About
          </Link>
          <Link href={"/"} className="hover:underline">
            Blog
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <LanguageSelect />
      </div>
      <div className="lg:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default Navigation;
