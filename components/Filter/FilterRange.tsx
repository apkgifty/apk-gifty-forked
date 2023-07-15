"use client";

import React, { useState } from "react";

const FilterRange = () => {
  const [value, setValue] = useState("0");

  return (
    <div className="space-y-1 relative">
      <label className="text-xs  text-gray-300 ">Price Range</label>
      <div className="w-full min-w-[100px]  px-2 py-1  bg-tertiary flex flex-col items-center gap-x-2 rounded-lg hover:cursor-pointer  ">
        <input
          type="range"
          className="custom-range"
          min={0}
          max={399}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className=" w-full mt-1 flex justify-between text-white  ">
          <span className="text-xs">$10</span>
          <span className=" text-xs">$399</span>
        </div>
      </div>
    </div>
  );
};

export default FilterRange;
