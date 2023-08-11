import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ForgotPasswordLink = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <Link href={"/forgot-password"} className="text-blue-600">
          Forgot Password
        </Link>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordLink;
