"use client";

import React, { useState } from "react";
import KYCBlocks from "./KYCBlocks";
import axiosInstance from "@/utils/axios";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "@/components/Animations/Lottie/blueloading.json";

const KYC = ({ status }: { status: string }) => {
  const [kycStatus, setKycStatus] = useState<any>(status);

  const [frontImage, setFrontImage] = useState<any>(null);
  const [backImage, setBackImage] = useState<any>(null);
  const [selfieImage, setSelfieImage] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const handleFrontImage = (e: any) => {
    const file = e.target.files[0];
    console.log(frontImage);
    setFrontImage(file);
  };

  const handleBackImage = (e: any) => {
    const file = e.target.files[0];
    console.log(backImage);
    setBackImage(file);
  };

  const handleSelfieImage = (e: any) => {
    const file = e.target.files[0];
    console.log(selfieImage);
    setSelfieImage(file);
  };

  const handleFilesSubmit = async () => {
    console.log(frontImage, backImage, selfieImage);
    const formData = new FormData();

    formData.append("front_image", frontImage);
    formData.append("back_image", backImage);
    formData.append("face_image", selfieImage);

    // let config = {
    //   method: "POST",
    //   maxBodyLength: Infinity,
    //   url: `/api/kyc`,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   data: formData,
    // };

    try {
      setLoading(true);
      const response = await axios.post("/api/kyc", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      setKycStatus(response.data.data.kyc.status);

      console.log(response.status);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {kycStatus === undefined && (
        <div className="w-full flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:gap-y-0 mt-12">
          <KYCBlocks
            label="ID Card Front Side"
            handleFileUpload={handleFrontImage}
            file={frontImage}
          />
          <KYCBlocks
            label="ID Card Back Side"
            handleFileUpload={handleBackImage}
            file={backImage}
          />
          <KYCBlocks
            label="Selfie with identity"
            handleFileUpload={handleSelfieImage}
            file={selfieImage}
          />
        </div>
      )}
      {kycStatus === undefined && (
        <div className="w-full flex justify-center mt-8 ">
          {loading ? (
            <div className="w-[200px] h-[200px]">
              <Lottie animationData={loadingAnimation} />
            </div>
          ) : (
            <button
              className="bg-appviolet px-3 py-2 rounded-xl"
              type="button"
              onClick={handleFilesSubmit}
            >
              Submit
            </button>
          )}
        </div>
      )}

      {kycStatus === "0" && (
        <div className="w-full flex justify-center mt-12">
          <p className="text-3xl text-orange-400 font-semibold">
            Verification Pending
          </p>
        </div>
      )}
      {kycStatus === "1" && (
        <div className="w-full flex justify-center mt-12">
          <p className="text-3xl text-green-400 font-semibold">
            Verification Completed
          </p>
        </div>
      )}
    </>
  );
};

export default KYC;
