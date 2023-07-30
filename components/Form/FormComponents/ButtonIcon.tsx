"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/components/Animations/Lottie/loading.json";

interface Props {
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
}

const ButtonIcon: React.FC<Props> = ({ icon, type, loading }) => {
  return (
    <motion.button
      type={type ? type : "button"}
      className="w-full rounded-lg bg-[#587BF2] relative text-sm px-2 py-2  flex justify-center items-center lg:py-3 lg:text-base hover:bg-[#4366d7]  disabled:bg-gray-600 disabled:cursor-not-allowed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      disabled={loading}
    >
      Continue
      {loading ? (
        <div className="w-[28px] h-[28px]  lg:w-[55px] lg:h-[55px] rounded-lg bg-transparent flex justify-center items-center absolute right-0 mr-10 ">
          <Lottie animationData={loadingAnimation} />
        </div>
      ) : (
        icon && (
          <div className="w-[28px] h-[28px]  lg:w-[35px] lg:h-[35px] rounded-lg bg-[#7995f5] flex justify-center items-center absolute right-0 mr-10 ">
            {icon}
          </div>
        )
      )}
    </motion.button>
  );
};

export default ButtonIcon;
