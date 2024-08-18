"use client";

import { MainNav } from "@/types/navTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useState } from "react";

const NavigationItem: React.FC<MainNav> = ({ title, link }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link}
      className={`${
        pathName === "/" && title.toLowerCase() === "home"
          ? "text-appviolet"
          : pathName.includes(title.toLowerCase())
          ? "text-appviolet"
          : "text-white"
      } hover:underline`}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
