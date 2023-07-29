"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface Props {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  config: {
    required: boolean;
  };
  register: any;
  errors: any;
}

const FormInput: React.FC<Props> = ({
  icon,
  type,
  placeholder,
  name,
  config,
  register,
  errors,
}) => {
  return (
    <motion.div
      className="w-full px-2 py-2 bg-tertiary rounded-xl flex gap-2 lg:py-3 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`px-2 border-r border-gray-400 ${
          errors[name] && "text-red-600"
        }`}
      >
        {icon}
      </div>
      <input
        type={type}
        className="bg-transparent outline-none text-xs lg:text-sm w-full"
        placeholder={placeholder}
        // name={name}
        autoComplete="off"
        {...register(name, config)}
      />
    </motion.div>
  );
};

export default FormInput;
