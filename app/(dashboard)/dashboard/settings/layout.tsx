import SettingsMenuItem from "@/components/Form/FormComponents/SettingsMenuItem";
import CurrencyIconSvg from "@/components/UI/SvgIcons/CurrencyIconSvg";
import IntegrationsIconSvg from "@/components/UI/SvgIcons/IntegrationsIconSvg";
import KycIconSvg from "@/components/UI/SvgIcons/KycIconSvg";
import NotificationSvg from "@/components/UI/SvgIcons/NotificationSvg";
import PaymentIconSvg from "@/components/UI/SvgIcons/PaymentIconSvg";
import SecurityIconSvg from "@/components/UI/SvgIcons/SecurityIconSvg";
import UserIconSvg from "@/components/UI/SvgIcons/UserIconSvg";
import IdeaSvg from "@/components/UI/SvgIcons/IdeaSvg";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MobileSettingsMenuSlider from "@/components/Mobile/MobileSettingsMenuSlider";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access");

  if (accessToken === undefined) {
    return redirect("/login");
  }

  return (
    <div className="w-full lg:flex flex-col lg:flex-row gap-8">
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <MobileSettingsMenuSlider menuItems={[2]} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-col w-full lg:w-[35%] text-white gap-y-8 px-8 pt-10">
        <SettingsMenuItem
          title="Personal Information"
          subtitle="Profile Settings"
          icon={<UserIconSvg />}
          link="/dashboard/settings/personal-information"
        />
        <SettingsMenuItem
          title="KYC Verification"
          subtitle="Authenticate your identity"
          icon={<KycIconSvg />}
          link="/dashboard/settings/kyc"
        />
        <SettingsMenuItem
          title="Tutorials"
          subtitle="How to Trade on ApkXchange"
          icon={<IdeaSvg />}
          link="/dashboard/settings/tutorials"
        />
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-[65%] px-4 lg:px-8 pt-6 lg:pt-10">
        {children}
      </div>
    </div>
  );
};

export default layout;
