"use client";

import { useState } from "react";

const LanguageSelect = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-tertiary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src="/united-kingdom.svg" width={20} className="mr-2" />
        English
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdown"
        className={`z-10 absolute top-12  ${
          open ? "block" : "hidden"
        } bg-secondary divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-white dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-secondary dark:hover:bg-gray-600 dark:hover:text-white"
            >
              French
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-secondary dark:hover:bg-gray-600 dark:hover:text-white"
            >
              German
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-secondary dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Portuguese
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-secondary dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelect;
