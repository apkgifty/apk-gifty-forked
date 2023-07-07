"use client";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";

const Switch = () => {
  const [activeOption, setActiveOption] = useState("login");

  useEffect(() => {
    const pathArray = window.location.href.split("/");
    const path = pathArray[pathArray.length - 1];
    setActiveOption(path);
  }, []);

  const handleSwitch = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className="flex ">
      <div className="max-w-md p-1 bg-tertiary rounded-xl">
        <ToggleButton
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
        />
      </div>
    </div>
  );
};

export default Switch;
