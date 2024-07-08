"use client";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  items: { label: string; url: string; slug: string }[];
  backgroundColor: string;
}

const Switch: React.FC<Props> = ({ items, backgroundColor }) => {
  const [activeOption, setActiveOption] = useState("");

  const pathName = usePathname();
  useEffect(() => {
    // const pathArray = window.location.href.split("/");
    // const path = pathArray[pathArray.length - 1];
    // console.log("path", path);
    // const path = pathName.split("/")[pathName.length - 1];
    // setActiveOption(path);
  }, []);

  const pathArray = pathName.split("/");
  const pathSlug = pathArray[pathArray.length - 1];
  // console.log(pathSlug);

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
            key={item.label}
            title={item.label}
            color={pathSlug === item.slug ? "bg-[#587BF2]" : "bg-transparent"}
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
