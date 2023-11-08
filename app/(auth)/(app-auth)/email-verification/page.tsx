import { redirect } from "next/navigation";
import axiosInstance from "@/utils/axios";

import EmailVerificationForm from "@/components/Form/EmailVerificationForm";

const EmailVerificationPage = async () => {
  // let userEmailVerificationStatus: any = null;
  // try {
  //   const config = {
  //     method: "GET",
  //     url: "/profile",
  //     maxBodyLength: Infinity,
  //     headers: {
  //       "Content-Type": "application/json",
  //       accept: "application/json",
  //     },
  //   };
  //   const response = await axiosInstance(config);
  //   // console.log(response.data);
  //   userEmailVerificationStatus = response.data.data.email_verified_at;
  // } catch (error) {
  //   console.log(error);
  // }

  // // console.log(userEmailVerificationStatus);

  // if (userEmailVerificationStatus !== null) {
  //   redirect("/dashboard/exchange/buy");
  // }

  return <div>{/* <EmailVerificationForm /> */}</div>;
};

export default EmailVerificationPage;
