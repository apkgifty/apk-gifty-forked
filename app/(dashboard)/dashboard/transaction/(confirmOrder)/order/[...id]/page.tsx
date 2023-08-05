import axios from "axios";
import { cookies } from "next/headers";

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

const runAction = async () => {
  "use server";
  console.log("It happened");
};

const fetchOrder = async (id: string, token: string) => {
  try {
    const response = await axios.get(
      `https://backend.apkxchange.com/api/order/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
};

const fetchPaymentMethods = async (token: string) => {
  try {
    const response = await axios.get(
      "https://backend.apkxchange.com/api/paymentInstructions",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
};

const ConfirmOrderPage = async ({ searchParams }: { searchParams: any }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;
  const id = searchParams.pid;

  if (!id) throw new Error("No order with that id");

  const [orderData, paymentMethods] = await Promise.all([
    fetchOrder(id, accessToken!),
    fetchPaymentMethods(accessToken!),
  ]);

  console.log(orderData);
  console.log(paymentMethods);
  const { price, processing_end_time, status } = orderData?.data;

  return (
    <div className="w-full bg-secondary px-4 flex flex-col  text-white pb-32 lg:flex-row lg:px-0 lg:h-screen lg:pb-0 lg:overflow-hidden">
      <ConfirmOrder
        price={price}
        stopTime={processing_end_time}
        status={status}
        id={id}
        token={accessToken!}
        orderData={orderData.data}
        paymentMethods={paymentMethods.data}
      />
    </div>
  );
};

export default ConfirmOrderPage;
