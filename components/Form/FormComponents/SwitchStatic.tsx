"use client";
import { useEffect, useState } from "react";
import ToggleButtonStatic from "./ToggleButtonStatic";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  items: { label: string; url: string; slug: string }[];
  backgroundColor: string;
  canChange: boolean;
}

const SwitchStatic: React.FC<Props> = ({
  items,
  backgroundColor,
  canChange,
}) => {
  const [activeOption, setActiveOption] = useState(items[0].slug);

  //   const pathName = usePathname();
  //   useEffect(() => {

  //   }, []);

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
          <ToggleButtonStatic
            key={item.label}
            title={item.label}
            // color={pathSlug === item.slug ? "bg-[#587BF2]" : "bg-transparent"}
            color={
              activeOption === item.slug ? "bg-[#587BF2]" : "bg-transparent"
            }
            handleSwitch={handleSwitch}
            slug={item.slug}
            canChange={canChange}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SwitchStatic;
