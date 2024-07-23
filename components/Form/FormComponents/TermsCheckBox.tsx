"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  register: any;
  name: string;
  config: any;
  errors: any;
}

const TermsCheckBox: React.FC<Props> = ({ register, name, config, errors }) => {
  return (
    <motion.div
      className="flex  flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          defaultValue=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2  "
          {...register(name, { ...config })}
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
      </div>
      {errors.agree && (
        <p className="text-red-500 text-xs mt-2 ml-4">{errors.agree.message}</p>
      )}
    </motion.div>
  );
};

export default TermsCheckBox;
