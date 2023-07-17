import React from "react";
import DashboardSvg from "../UI/SvgIcons/DashboardSvg";
import ExchangeSvg from "../UI/SvgIcons/ExchangeSvg";
import WalletSvg from "../UI/SvgIcons/WalletSvg";
import TransactionSvg from "../UI/SvgIcons/TransactionSvg";
import NewsSvg from "../UI/SvgIcons/NewsSvg";

const MobileNav = () => {
  return (
    <div className="w-full flex justify-center text-white absolute bottom-10 mb-8 lg:hidden">
      <div className="w-[80%] flex justify-around bg-[#587BF2] px-4 py-3 rounded-xl z-100">
        <div>
          <DashboardSvg />
        </div>
        <div>
          <ExchangeSvg />
        </div>
        <div>
          <WalletSvg />
        </div>
        <div>
          <TransactionSvg />
        </div>
        <div>
          <NewsSvg />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
