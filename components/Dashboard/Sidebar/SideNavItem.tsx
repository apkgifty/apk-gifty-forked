"use client";

import Badge from "../../UI/Badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  url: string;
  title: string;
  icon: React.ReactNode;
  badgeData?: string;
}

const SideNavItem: React.FC<Props> = ({ url, title, icon, badgeData }) => {
  const pathname = usePathname();
  console.log(pathname);
  console.log(pathname.split("/")[2]);
  return (
    <Link
      className={`flex items-center px-3 py-2 ${
        // pathname.split("/")[2] === title.toLowerCase()
        pathname === "/" && title.toLowerCase() === "home"
          ? "bg-[#587bf2] text-white"
          : pathname.includes(title.toLowerCase())
          ? "bg-[#587bf2] text-white"
          : "bg-transparent text-[#C2C2C2]"
      }  transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-[#587bf2] hover:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200 `}
      href={url}
    >
      {icon}
      <span className="mx-2 text-sm font-medium">{title}</span>
      {badgeData && <Badge info={badgeData} />}
    </Link>
  );
};

export default SideNavItem;
