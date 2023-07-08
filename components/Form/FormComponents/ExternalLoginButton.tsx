import { motion } from "framer-motion";

interface Props {
  iconUrl: string;
}

const ExternalLoginButton: React.FC<Props> = ({ iconUrl }) => {
  return (
    <motion.button
      type="button"
      className="flex px-3 py-3 bg-tertiary rounded-xl "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-7">
        <img src={iconUrl} />
      </div>
    </motion.button>
  );
};

export default ExternalLoginButton;
