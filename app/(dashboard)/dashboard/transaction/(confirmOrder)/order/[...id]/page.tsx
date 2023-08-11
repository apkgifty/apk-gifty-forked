import axios from "axios";
import { cookies } from "next/headers";
import axiosInstance from "@/utils/axios";

import AddSvg from "@/components/UI/SvgIcons/AddSvg";
import EllipsesSvg from "@/components/UI/SvgIcons/EllipsesSvg";
import EmotionSvg from "@/components/UI/SvgIcons/EmotionSvg";
import EyeSvg from "@/components/UI/SvgIcons/EyeSvg";
import HeadphoneSvg from "@/components/UI/SvgIcons/HeadphoneSvg";
import InfoSvg from "@/components/UI/SvgIcons/InfoSvg";
import PaperPlaneSvg from "@/components/UI/SvgIcons/PaperPlaneSvg";
import PhoneSvg from "@/components/UI/SvgIcons/PhoneSvg";
import Countdown from "@/components/Dashboard/DashUtils/Countdown";
import Chat from "@/components/Dashboard/DashUtils/Chat";
import ConfirmOrder from "@/components/Clients/ConfirmOrder";
import EndedOrder from "@/components/Clients/EndedOrder";
import { order } from "@/redux/features/orderSlice";

const runAction = async () => {
  "use server";
  console.log("It happened");
};

const fetchOrder = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `https://backend.apkxchange.com/api/order/${id}`,
      {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPaymentMethods = async () => {
  try {
    const response = await axiosInstance.get(
      "https://backend.apkxchange.com/api/paymentInstructions",
      {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRate = async () => {
  try {
    const response = await axiosInstance.get(
      "https://backend.apkxchange.com/api/setting"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const ConfirmOrderPage = async ({ searchParams }: { searchParams: any }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;
  const id = searchParams.pid;

  if (!id) throw new Error("No order with that id");

  const [orderData, paymentMethods, rate] = await Promise.all([
    fetchOrder(id),
    fetchPaymentMethods(),
    fetchRate(),
  ]);

  console.log(rate.data[0].rate);

  // console.log(orderData);
  // console.log(paymentMethods);
  // const { price, processing_end_time, status } = orderData?.data;
  // console.log(orderData?.data.status);
  // console.log(Number(orderData.data.status) < 2);
  // const status = orderData.data.status;
  return (
    <div className="w-full bg-secondary px-4 flex flex-col  text-white pb-32 lg:flex-row lg:px-0 lg:h-screen lg:pb-0 lg:overflow-hidden">
      <ConfirmOrder
        token={accessToken!}
        orderData={orderData.data}
        paymentMethods={paymentMethods.data}
        rate={rate.data[0].rate}
      />

      {/* {orderData?.data.status === "2" ||
        (orderData?.data.status === "-1" && (
          <EndedOrder orderData={orderData} />
        ))} */}
    </div>
  );
};

export default ConfirmOrderPage;
