"use client";

import { MainNav } from "@/types/navTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationItem: React.FC<MainNav> = ({ title, link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link}
      className={`${
        pathName.includes(link) ? "text-violet-500" : "text-white"
      } hover:underline`}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
