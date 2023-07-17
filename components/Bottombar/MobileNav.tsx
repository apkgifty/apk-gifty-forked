import React from "react";
import DashboardSvg from "../UI/SvgIcons/DashboardSvg";
import ExchangeSvg from "../UI/SvgIcons/ExchangeSvg";
import WalletSvg from "../UI/SvgIcons/WalletSvg";
import TransactionSvg from "../UI/SvgIcons/TransactionSvg";
import NewsSvg from "../UI/SvgIcons/NewsSvg";
import { motion } from "framer-motion";
import ScaleAnimate from "../Animations/ScaleAnimate";

const MobileNav = () => {
  return (
    <div className="w-full flex justify-center text-white fixed bottom-2 mb-8 lg:hidden">
      <div className="w-[80%] flex justify-around bg-[#587BF2] px-4 py-3 rounded-xl z-100">
        <ScaleAnimate>
          <DashboardSvg size="medium" />
        </ScaleAnimate>
        <ScaleAnimate>
          <ExchangeSvg size="medium" />
        </ScaleAnimate>
        <ScaleAnimate>
          <WalletSvg size="medium" />
        </ScaleAnimate>
        <ScaleAnimate>
          <TransactionSvg size="medium" />
        </ScaleAnimate>
        <ScaleAnimate>
          <NewsSvg size="medium" />
        </ScaleAnimate>
      </div>
    </div>
  );
};

export default MobileNav;
