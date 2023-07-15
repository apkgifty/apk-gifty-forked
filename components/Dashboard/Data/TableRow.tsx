import React from "react";

const TableRow = () => {
  return (
    <div className="w-full flex justify-between py-4 px-20 border-b border-tertiary">
      <div className=" flex gap-x-2 text-white font-light">
        <div className="w-6 h-6 bg-purple-700 flex items-center justify-center rounded-full text-xs">
          S
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <span className="text-sm ">Small shark</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.974 7.99987L13.534 6.23987L13.614 3.91987L11.374 3.35986L10.094 1.35986L7.93403 2.15986L5.77402 1.35986L4.49404 3.27987L2.25403 3.91987L2.33403 6.23987L0.894043 7.99987L2.33403 9.83987L2.25403 12.1598L4.49404 12.7198L5.77402 14.6398L7.93403 13.8398L10.094 14.6398L11.374 12.6398L13.614 11.9998L13.534 9.67987L14.974 7.99987ZM7.85403 9.99987L6.89404 10.9599L5.93403 9.99987L4.25403 8.31987L5.21404 7.35986L6.89404 9.03987L10.654 5.27987L11.614 6.23987L7.85403 9.99987Z"
                fill="url(#paint0_linear_101_3736)"
              />
              <path
                d="M7.85391 9.87968L6.89393 10.8397L5.93392 9.87968L4.25391 8.19968L5.21392 7.23967L6.89393 8.91968L10.6539 5.15967L11.614 6.11968L7.85391 9.87968Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_101_3736"
                  x1="0.894043"
                  y1="1.35986"
                  x2="14.974"
                  y2="13.4843"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D89F00" />
                  <stop offset="0.473958" stop-color="#FCD035" />
                  <stop offset="0.776042" stop-color="#D89F00" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="text-[12px] space-x-4">
            <span>11 orders</span>
            <span>97% completion</span>
          </div>

          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.83333 6.48217L8.12933 4.2215V2.00684H8.72133C9.27039 2.00684 9.79697 2.2249 10.1853 2.61308C10.5736 3.00127 10.7918 3.52778 10.792 4.07684V5.19217H14.5V9.4755C14.5 10.3203 14.1644 11.1305 13.567 11.7279C12.9697 12.3252 12.1595 12.6608 11.3147 12.6608H5.83333V6.48217ZM4.5 6.45684H2.5V12.6608H4.5V6.45684Z"
                fill="#0ECB81"
              />
            </svg>
            <span className="text-gray-600 text-[10px]">92%</span>
          </div>
        </div>
      </div>
      <div>
        <span className="font-light text-white"> 90.62 </span>{" "}
        <span className="text-[10px] font-light text-white">USD</span>
      </div>
      <div className="space-x-3">
        <span className="text-xs text-gray-600"> Available </span>
        <span className="text-sm text-white font-light"> 3,000.00USD</span>
      </div>
      <div>
        <span className="text-xs text-white font-light bg-green-700 px-1 py-1 rounded-sm">
          PayPal
        </span>
      </div>
      <div className="">
        <button className="px-4 py-2 bg-purple-500 text-xs text-white rounded-sm">
          Buy Gift Card
        </button>
      </div>
    </div>
  );
};

export default TableRow;
