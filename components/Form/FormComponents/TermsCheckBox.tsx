"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TermsCheckBox = ({ register }: { register: any }) => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <input
        id="link-checkbox"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2  "
        {...register("agree", { required: false })}
      />

      <label
        htmlFor="link-checkbox"
        className="ml-2 text-sm font-medium text-white"
      >
        I agree to the
        <Link
          href={"/terms-of-service"}
          className="text-blue-600  hover:underline"
        >
          {" "}
          Terms and Conditions
        </Link>
        .
      </label>
    </motion.div>
  );
};

export default TermsCheckBox;
