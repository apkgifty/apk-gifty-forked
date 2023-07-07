import { useState } from "react";
import ToggleButton from "./ToggleButton";

const Switch = () => {
  const [activeOption, setActiveOption] = useState("login");

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
        />
        <ToggleButton
          title="Signup"
          color={activeOption === "signup" ? "bg-[#587BF2]" : "bg-transparent"}
          handleSwitch={handleSwitch}
        />
      </div>
    </div>
  );
};

export default Switch;
