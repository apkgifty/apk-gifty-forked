import { useState } from "react";

const Switch = () => {
  const [activeOption, setActiveOption] = useState("login");

  const handleSwitch = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className="flex ">
      <div className="max-w-md p-1 bg-tertiary rounded-xl">
        <button
          className={`px-4 py-2 text-sm rounded-xl ${
            activeOption === "login"
              ? "bg-[#587BF2] text-white"
              : "bg-transparent"
          }`}
          onClick={() => handleSwitch("login")}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-xl ${
            activeOption === "signup"
              ? "bg-[#587BF2] text-white"
              : "bg-transparent"
          }`}
          onClick={() => handleSwitch("signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Switch;
