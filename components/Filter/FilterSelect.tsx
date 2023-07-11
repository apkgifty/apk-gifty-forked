"use client";

import { useState, useRef, useEffect } from "react";
import DropIcon from "../UI/SvgIcons/DropIcon";

interface Props {
  label: string;
  icon?: React.ReactNode;
  options: any;
}

const FilterSelect: React.FC<Props> = ({ label, icon, options }) => {
  const [selectedOption, setSelectedOption] = useState(() => {
    return options[0];
  });
  const [showOptions, setShowOptions] = useState(false);

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-1 relative" ref={componentRef}>
      <label className="text-xs font-light">{label}</label>
      <div
        className="w-full  px-2 py-2 bg-tertiary flex items-center gap-x-2 rounded-sm hover:cursor-pointer "
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <span>{icon}</span>
        <span className="text-gray-600 text-xs flex-shrink-0 max-w-[4rem] min-w-[4rem] whitespace-nowrap overflow-hidden overflow-ellipsis ">
          {selectedOption !== "" ? selectedOption : "All Regions"}
        </span>
        <span className="text-gray-600 text-xs">
          <DropIcon />
        </span>
      </div>

      {showOptions && (
        <div className="absolute top-13  bg-tertiary w-36 flex rounded-sm shadow">
          <ul className="w-full text-xs cursor-pointer ">
            {options.map((option: any) => (
              <li
                className="hover:bg-secondary w-full px-2 py-3 border-b border-zinc-700"
                onClick={() => {
                  setSelectedOption(option);
                  setShowOptions(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
