"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const ScaleAnimate: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, transition: { duration: 0.3, delay: 0 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.2, delay: 0 } }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleAnimate;
