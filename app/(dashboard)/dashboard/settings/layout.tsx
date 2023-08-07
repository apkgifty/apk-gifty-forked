import SettingsMenuItem from "@/components/Form/FormComponents/SettingsMenuItem";
import CurrencyIconSvg from "@/components/UI/SvgIcons/CurrencyIconSvg";
import IntegrationsIconSvg from "@/components/UI/SvgIcons/IntegrationsIconSvg";
import KycIconSvg from "@/components/UI/SvgIcons/KycIconSvg";
import NotificationSvg from "@/components/UI/SvgIcons/NotificationSvg";
import PaymentIconSvg from "@/components/UI/SvgIcons/PaymentIconSvg";
import SecurityIconSvg from "@/components/UI/SvgIcons/SecurityIconSvg";
import UserIconSvg from "@/components/UI/SvgIcons/UserIconSvg";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
    <div className="w-full flex flex-col lg:flex-row ">
      <div className="hidden lg:flex flex-col w-full lg:w-[35%] text-white gap-y-8 px-8 pt-10">
        <SettingsMenuItem
          title="Personal Information"
          subtitle="Profile Settings"
          icon={<UserIconSvg />}
          isSelected
        />
        <SettingsMenuItem
          title="Security"
          subtitle="For your account security"
          icon={<SecurityIconSvg />}
          isSelected={false}
        />
        <SettingsMenuItem
          title="Currency preferences"
          subtitle="Choose currency"
          icon={<CurrencyIconSvg />}
          isSelected={false}
        />
        <SettingsMenuItem
          title="Notifications"
          subtitle="Application notification settings"
          isSelected={false}
          icon={<NotificationSvg />}
        />
        <SettingsMenuItem
          title="Payment Option"
          subtitle="Methods of buying gift cards"
          icon={<PaymentIconSvg />}
          isSelected={false}
        />
        <SettingsMenuItem
          title="Integrations"
          subtitle="Access to APIs and side programs"
          icon={<IntegrationsIconSvg />}
          isSelected={false}
        />
        <SettingsMenuItem
          title="KYC Verification"
          subtitle="Authenticate your identity"
          icon={<KycIconSvg />}
          isSelected={false}
        />
      </div>
      <div className="px-8  pt-10 w-full lg:w-[65%]"> {children}</div>
    </div>
  );
};

export default layout;
