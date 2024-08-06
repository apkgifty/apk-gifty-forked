"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
}

const SettingsMenuItem: React.FC<Props> = ({
  icon,
  title,
  subtitle,

  link,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === link) {
      setIsSelected(true);
    }
    return () => setIsSelected(false);
  }, [pathname]);

  return (
    <Link href={link}>
      <div className="flex gap-x-3 items-center cursor-pointer">
        <div
          className={`w-12 h-12  rounded-lg flex justify-center items-center ${
            isSelected ? "bg-appviolet" : "bg-primary"
          }`}
        >
          {icon}
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default SettingsMenuItem;
