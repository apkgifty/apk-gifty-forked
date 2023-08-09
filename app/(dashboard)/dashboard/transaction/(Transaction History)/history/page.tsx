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
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

const TransactionHistory = async () => {
  const orders = await fetchOrders();

  console.log(orders.data);
  return (
    <div className="w-full text-white px-12 py-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-white ">
          <TableHead />
          <tbody>
            {orders.data.map((order: any) => (
              <TableDataRow
                key={order.id}
                description={order.description}
                quantity={order.quantity}
                price={order.price}
                date={order.created_at}
                status={order.status}
                type={order.type}
                product_id={order.product_id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
