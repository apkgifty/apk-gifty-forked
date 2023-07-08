import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const FormContainer: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="bg-secondary rounded-lg  py-10 lg:min-h-[600px]"
    >
      {children}
    </motion.div>
  );
};

export default FormContainer;
