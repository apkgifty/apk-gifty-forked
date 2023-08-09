import React from "react";

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
  const parseDate = new Date(date);
  const formatedDate = `${
    parseDate.getUTCMonth() + 1
  }/${parseDate.getUTCDate()}/${parseDate.getUTCFullYear()}`;
  return (
    <tr className="bg-tertiary cursor-pointer hover:bg-secondary ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap "
      >
        {description}
      </th>
      <td className="px-6 py-4">{type}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{formatedDate}</td>
      <td className="px-6 py-4 ">
        <span
          className={`${
            status === "0"
              ? "bg-red-900 text-red-300"
              : status === "1"
              ? "bg-green-900 text-green-300"
              : ""
          }  text-xs font-medium mr-2 px-2.5 py-0.5 rounded `}
        >
          {status === "0" ? "Pending" : status === "1" ? "Completed" : ""}
        </span>
      </td>
    </tr>
  );
};

export default TableDataRow;
