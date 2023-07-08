import { motion } from "framer-motion";

const ButtonIcon = () => {
  return (
    <motion.button
      type="button"
      className="w-full rounded-lg bg-[#587BF2] text-sm px-2 py-2  flex justify-center lg:py-3 lg:text-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Continue
    </motion.button>
  );
};

export default ButtonIcon;
