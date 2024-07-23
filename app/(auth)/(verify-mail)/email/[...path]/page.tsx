"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "@/components/Animations/Lottie/blueloading.json";
import { usePathname, useSearchParams } from "next/navigation";

const ConfirmEmailPage = () => {
  const router = useRouter();
  // const pathName = usePathname();
  // const searchParams = useSearchParams();

  // const expires = searchParams.get("expires");
  // const signature = searchParams.get("signature");

  // console.log(expires);
  // console.log(signature);
  // console.log(pathName);

  // const axiosRequestConfig = {
  //   method: "GET",
  //   maxBodyLength: Infinity,
  //   url: `/api/verify-email`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: `${pathName}/?expires=${expires}&signature=${signature}`,
  // };

  // try {
  //   const response = await axios(axiosRequestConfig);
  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }

  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    verifyEmailFunc();
  }, []);

  const verifyEmailFunc = async () => {
    const config = {
      method: "GET",
      maxBodyLength: Infinity,
      url: `/api/email-verify`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[250px]">
      {!emailVerified && <Lottie animationData={loadingAnimation} />}
    </div>
  );
};

export default ConfirmEmailPage;
