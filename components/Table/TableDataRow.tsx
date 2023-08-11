"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  status: string;
  product_id: string;
  type: string;
  price: string;
  quantity: string;
  date: string;
  description: string;
}

const TableDataRow: React.FC<Props> = ({
  status,
  product_id,
  type,
  price,
  quantity,
  date,
  description,
}) => {
  const router = useRouter();

  const parseDate = new Date(date);
  const formatedDate = `${
    parseDate.getUTCMonth() + 1
  }/${parseDate.getUTCDate()}/${parseDate.getUTCFullYear()}`;

  ("bg-red-900 text-red-300");
  let stateBadge: any;

  if (status === "1") {
    stateBadge = (
      <span className="bg-gray-600 text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
        Pending
      </span>
    );
  } else if (status == "-1") {
    stateBadge = (
      <span className="bg-red-900 text-red-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
        Cancelled
      </span>
    );
  } else if (status === "2") {
    stateBadge = (
      <span className="bg-green-900 text-green-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
        Completed
      </span>
    );
  } else if (status === "0") {
    stateBadge = (
      <span className="bg-gray-600 text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
        Pending
      </span>
    );
  }
  return (
    <tr
      className="bg-tertiary cursor-pointer hover:bg-secondary "
      onClick={() => {
        if (product_id === "2" || product_id === "-1") return;
        router.push(`/dashboard/transaction/order/${type}?pid=${product_id}`);
      }}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap "
      >
        {description}
      </th>
      <td className="px-6 py-4">{type}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{formatedDate}</td>
      <td className="px-6 py-4 ">{stateBadge}</td>
    </tr>
  );
};

export default TableDataRow;
