"use client";
import { motion } from "framer-motion";

const AuthLayoutText = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-xl font-bold bg-gradient-to-r from-[#FB774A] to-[#12BE73] inline-block text-transparent bg-clip-text">
        Trade
      </p>
      <p className="font-semibold">
        anything, anywhere with <br /> APKExchange!
      </p>
    </motion.div>
  );
};

export default AuthLayoutText;
