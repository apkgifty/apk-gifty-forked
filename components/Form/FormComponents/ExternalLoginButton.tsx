import { motion } from "framer-motion";

interface Props {
  iconUrl: string;
  variants: any;
  index: number;
}

const ExternalLoginButton: React.FC<Props> = ({ iconUrl, variants, index }) => {
  return (
    <motion.button
      type="button"
      className="flex px-3 py-3 bg-tertiary rounded-xl "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: index * 0.4 } }}
      variants={variants}
      // transition={{ duration: 1, delay: index * 0.4 }}
      whileHover={{ scale: 1.3, transition: { duration: 0.3, delay: 0 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.2, delay: 0 } }}
    >
      <div className="w-7">
        <img src={iconUrl} />
      </div>
    </motion.button>
  );
};

export default ExternalLoginButton;
