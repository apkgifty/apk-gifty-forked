import { motion, AnimatePresence } from "framer-motion";
interface Props {
  title: string;
  subtitle: string;
}

const FormHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-4 lg:pl-14 lg:pr-8">
          <h3 className="text-center text-2xl mb-2 font-semibold lg:text-left">
            {title}
          </h3>
          <p className="text-center text-gray-400 text-xs lg:text-sm lg:text-left lg:pr-24">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FormHeader;
