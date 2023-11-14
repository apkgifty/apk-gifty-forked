import TableDataRow from "@/components/Table/TableDataRow";
import TableHead from "@/components/Table/TableHead";
import React from "react";

import axios from "axios";
import axiosInstance from "@/utils/axios";

const fetchOrders = async () => {
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `/orders`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: accessToken,
    },
  };

  try {
    const response = await axiosInstance(config);

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

const TransactionHistory = async () => {
  const orders = await fetchOrders();

  console.log(orders);

  return (
    <div className="w-full text-whitepy-10 py-4 px-2 lg:px-12 lg:py-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-white ">
          <TableHead />
          <tbody>
            {orders.data.map((order: any) => (
              <TableDataRow
                key={order.id}
                description={order.name}
                quantity={order.quantity}
                price={order.price}
                date={order.created_at}
                status={order.status}
                type={order.type}
                product_id={order.product_id}
                order_id={order.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
