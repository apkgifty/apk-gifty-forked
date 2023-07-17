import Iconcard from "@/components/Card/Iconcard";
import LanguageSelect from "@/components/UI/LanguageSelect";
import NotificationSvg from "@/components/UI/SvgIcons/NotificationSvg";
import SettingsSvg from "@/components/UI/SvgIcons/SettingsSvg";
import WalletSvg from "@/components/UI/SvgIcons/WalletSvg";

const Topbar = () => {
  return (
    <div className="w-full px-6 py-4 sticky top-0 z-10 flex justify-between bg-secondary border-b border-tertiary text-white">
      <div></div>
      <div className="flex gap-x-2">
        <LanguageSelect />
        <Iconcard icon={<WalletSvg />} animate />
        <Iconcard icon={<SettingsSvg />} animate />
        <Iconcard icon={<NotificationSvg />} badgeData="8" animate />
      </div>
    </div>
  );
};

export default Topbar;
