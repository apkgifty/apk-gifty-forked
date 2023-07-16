import Badge from "../../UI/Badge";
import Link from "next/link";

interface Props {
  url: string;
  title: string;
  icon: React.ReactNode;
  badgeData?: string;
}

const SideNavItem: React.FC<Props> = ({ url, title, icon, badgeData }) => {
  return (
    <Link
      className="flex items-center px-3 py-2 text-[#C2C2C2] transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-[#587bf2] hover:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200 "
      href={url}
    >
      {icon}
      <span className="mx-2 text-sm font-medium">{title}</span>
      {badgeData && <Badge info={badgeData} />}
    </Link>
  );
};

export default SideNavItem;
