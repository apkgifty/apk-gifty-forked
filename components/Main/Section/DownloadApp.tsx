"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DownloadApp: React.FC = () => {
  return (
    <div className="flex space-x-3">
      <motion.div
        className="p-2 bg-secondary cursor-pointer rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/images/appstore-download.png"}
          alt="get app from app store"
          width={125}
          height={125}
          priority
        />
      </motion.div>
      <motion.div
        className="p-2 bg-secondary cursor-pointer rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/images/playstore-download.png"}
          alt="get app from app store"
          width={125}
          height={125}
          priority
        />
      </motion.div>
    </div>
  );
};

export default DownloadApp;
