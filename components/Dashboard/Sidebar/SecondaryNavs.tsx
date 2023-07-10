import InboxSvg from "../../UI/SvgIcons/InboxSvg";
import SideNavItem from "./SideNavItem";

const links = [{ title: "Inbox", url: "#", icon: <InboxSvg />, data: "8" }];

const SecondaryNavs = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-light text-[#C2C2C2] ">Insights</h2>
      </div>
      <nav className="mt-4 -mx-3 space-y-3 ">
        {links.map((link) => (
          <SideNavItem
            key={link.title}
            title={link.title}
            url={link.url}
            icon={link.icon}
            badgeData={link.data}
          />
        ))}
      </nav>
    </div>
  );
};

export default SecondaryNavs;
