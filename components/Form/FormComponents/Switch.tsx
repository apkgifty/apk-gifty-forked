"use client";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

interface Props {
  items: { label: string; url: string }[];
  backgroundColor: string;
}

const Switch: React.FC<Props> = ({ items, backgroundColor }) => {
  const [activeOption, setActiveOption] = useState("");

  useEffect(() => {
    const pathArray = window.location.href.split("/");
    const path = pathArray[pathArray.length - 1];
    setActiveOption(path);
  }, []);

  const handleSwitch = (option: string) => {
    setActiveOption(option);
  };

  return (
    <motion.div
      className="flex "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={`max-w-md p-1   rounded-xl ${backgroundColor}`}>
        {items.map((item) => (
          <ToggleButton
            title={item.label}
            color={
              activeOption === item.url ? "bg-[#587BF2]" : "bg-transparent"
            }
            handleSwitch={handleSwitch}
            url={item.url}
          />
        ))}
        {/* <ToggleButton
          title="Login"
          color={activeOption === "login" ? "bg-[#587BF2]" : "bg-transparent"}
          handleSwitch={handleSwitch}
          url="login"
        />
        <ToggleButton
          title="Signup"
          color={activeOption === "signup" ? "bg-[#587BF2]" : "bg-transparent"}
          handleSwitch={handleSwitch}
          url="signup"
        /> */}
      </div>
    </motion.div>
  );
};

export default Switch;
