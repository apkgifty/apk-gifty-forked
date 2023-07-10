"use client";
import { motion } from "framer-motion";

const ImagesCard = () => {
  return (
    <motion.div
      className="w-full max-w-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center">
        <img src="/images/image 5.png" />
        <img src="/images/image 7.png" />
      </div>
      <div className="flex justify-between items-center">
        <div />
        <img src="/images/image 8.png" />
        <img src="/images/NFT Image.png" />
      </div>
      <div className="flex justify-between items-center">
        <div />
        <img src="/images/QR-Code-Scan.svg" />
        <img src="/images/image 9.png" />
      </div>
    </motion.div>
  );
};

export default ImagesCard;
