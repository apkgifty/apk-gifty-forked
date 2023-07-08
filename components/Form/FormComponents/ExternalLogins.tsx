import { motion } from "framer-motion";
import ExternalLoginButton from "./ExternalLoginButton";

const ExternalLogins = () => {
  return (
    <div>
      <motion.div
        className="w-full relative border-t border-gray-600 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="absolute -top-2  bg-secondary font-semibold px-2 text-xs lg:text-sm lg:-top-3">
          Or Continue with
        </p>
      </motion.div>
      <div className="w-full flex justify-between mt-6">
        <ExternalLoginButton iconUrl="/facebook.svg" />
        <ExternalLoginButton iconUrl="/apple.svg" />
        <ExternalLoginButton iconUrl="/google.svg" />
      </div>
    </div>
  );
};

export default ExternalLogins;
