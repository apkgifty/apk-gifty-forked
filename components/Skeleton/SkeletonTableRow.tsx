import React from "react";

const SkeletonTableRow = () => {
  return (
    <tr className=" py-4">
      <td className="px-8 py-2 ng-gray-600">
        {" "}
        <div className="w-32 h-2.5 bg-gray-500 rounded-full mb-2.5"></div>
      </td>{" "}
      <td className="px-8 py-2 ng-gray-600">
        {" "}
        <div className="w-8 h-2.5 bg-gray-500 rounded-full mb-2.5"></div>
      </td>{" "}
      <td className="px-8 py-2 ng-gray-600">
        {" "}
        <div className="w-10 h-2.5 bg-gray-500 rounded-full mb-2.5"></div>
      </td>{" "}
      <td className="px-8 py-2 ng-gray-600">
        {" "}
        <div className="w-10 h-2.5 bg-gray-500 rounded-full mb-2.5"></div>
      </td>{" "}
      <td className="px-8 py-2 ng-gray-600">
        {" "}
        <div className="w-10 h-2.5 bg-gray-500 rounded-full mb-2.5"></div>
      </td>
    </tr>
  );
};

export default SkeletonTableRow;
