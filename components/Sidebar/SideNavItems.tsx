import DashboardSvg from "../UI/SvgIcons/DashboardSvg";
import ExchangeSvg from "../UI/SvgIcons/ExchangeSvg";
import NewsSvg from "../UI/SvgIcons/NewsSvg";
import SettingsSvg from "../UI/SvgIcons/SettingsSvg";
import TransactionSvg from "../UI/SvgIcons/TransactionSvg";
import WalletSvg from "../UI/SvgIcons/WalletSvg";
import SideNavItem from "./SideNavItem";

interface Props {
  links: any;
}

const links = [
  { title: "Home", url: "#", icon: <DashboardSvg /> },
  { title: "Exchange", url: "#", icon: <ExchangeSvg /> },
  { title: "Wallet", url: "#", icon: <WalletSvg /> },
  { title: "Transaction", url: "#", icon: <TransactionSvg /> },
  { title: "Settings", url: "#", icon: <SettingsSvg /> },
  { title: "News", url: "#", icon: <NewsSvg /> },
];

const SideNavItems = () => {
  return (
    <>
      {links.map((link) => (
        <SideNavItem
          key={link.url}
          title={link.title}
          url={link.url}
          icon={link.icon}
        />
      ))}
    </>
  );
};

export default SideNavItems;
