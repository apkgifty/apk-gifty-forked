"use client";

import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
}

const FormInput: React.FC<Props> = ({
  icon,
  type,
  placeholder,
  name,
  required,
}) => {
  return (
    <motion.div
      className="w-full px-2 py-2 bg-tertiary rounded-xl flex gap-2 lg:py-3 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="px-2 border-r border-gray-400">{icon}</div>
      <input
        type={type}
        className="bg-transparent outline-none text-xs lg:text-sm w-full"
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        required={required}
      />
    </motion.div>
  );
};

export default FormInput;
