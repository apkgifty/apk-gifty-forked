import React from "react";
import axiosInstance from "@/utils/axios";

const fetchData = async () => {
  try {
    const response = await axiosInstance.get("paymentInstructions");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const SecurityPage = async () => {
  const response = await fetchData();
  console.log(response);
  return <div className="text-white">SecurityPage</div>;
};

export default SecurityPage;
