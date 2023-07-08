import { motion } from "framer-motion";

interface Props {
  selected: string;
  title: string;
  info: string;
  type: string;
  handleSelect: any;
}

const ConfirmationSelect: React.FC<Props> = ({
  selected,
  title,
  info,
  type,
  handleSelect,
}) => {
  return (
    <motion.div
      className="w-full rounded-lg bg-tertiary text-sm px-3 py-2 cursor-pointer flex items-center gap-4  lg:py-3 lg:text-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={() => {
        handleSelect(type);
      }}
    >
      <div
        className={`flex justify-center items-center w-6 h-6 rounded-full border ${
          selected === type ? "border-blue-600" : "border-gray-500"
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            selected === type ? "bg-blue-600" : "bg-transparent"
          }`}
        ></div>
      </div>
      <div>
        <p>{title}</p>
        <p className="text-sm text-gray-500">{info}</p>
      </div>
    </motion.div>
  );
};

export default ConfirmationSelect;
