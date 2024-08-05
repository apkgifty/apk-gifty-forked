"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Switch from "@/components/Form/FormComponents/Switch";
import SwitchStatic from "@/components/Form/FormComponents/SwitchStatic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";
import axios from "axios";
import MiniLoader from "@/components/UI/Loader/MiniLoader";
import KYCElement from "@/components/kyc/KYCElement";

interface KycElementsProps {
  [key: string]: {
    loading: boolean;
    uploaded: boolean;
  };
}

const KycElements = [
  {
    name: "front_image",
    label: "Front",
  },
  {
    name: "back_image",
    label: "Back",
  },
];

const KycUpload = () => {
  const [kycStatus, setKycStatus] = useState<any>(false);
  const [canChangeType, setCanChangeType] = useState<boolean>(true);

  const [kycElementsState, setKycElementsState] = useState<KycElementsProps>({
    front_image: { loading: false, uploaded: false },
    back_image: { loading: false, uploaded: false },
  });

  const handleImageUpload = async (e: any) => {
    const name = e.target.name;
    const file = e.target.files[0];

    handleFilesSubmit(name, file);
  };

  const setKycElementsWrapper = (key: string, keyType: string, value: any) => {
    setKycElementsState((prev) => {
      return {
        ...prev,
        [key]: {
          ...prev[key],
          [keyType]: value,
        },
      };
    });
  };

  const handleFilesSubmit = async (type: string, file: any) => {
    // console.log(frontImage, backImage, selfieImage);
    const formData = new FormData();

    formData.append(type, file);

    try {
      setKycElementsWrapper(type, "loading", true);
      const response = await axios.post("/api/kyc", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setKycElementsWrapper(type, "loading", false);

      if (response.status === 200) {
        setKycElementsWrapper(type, "uploaded", true);
      }
    } catch (error) {
      console.log(error);
      setKycElementsWrapper(type, "loading", false);
    }
  };

  useEffect(() => {
    if (
      kycElementsState.front_image.uploaded &&
      kycElementsState.back_image.uploaded
    ) {
      setKycStatus(true);
    }

    if (
      kycElementsState.front_image.uploaded ||
      kycElementsState.back_image.uploaded
    ) {
      setCanChangeType(false);
    }
  }, [kycElementsState]);

  return (
    <div className="w-full py-16 px-8 lg:px-0">
      <div className="flex flex-col justify-center items-center text-white space-y-3 max-w-xl mx-auto">
        <h3 className="text-xl lg:text-3xl font-bold text-center mb-3">
          {" "}
          Let&apos;s Begin Your KYC Process
        </h3>
        <p className="text-xs lg:text-sm">Choose document type</p>{" "}
        <div className="mb-4">
          <SwitchStatic
            items={[
              { label: "Ghana Card", url: "id", slug: "ghana-card" },
              { label: "Voters ID", url: "voters", slug: "voters" },
              {
                label: "Driver's License",
                url: "driver-license",
                slug: "driver-license",
              },
            ]}
            backgroundColor="bg-transparent"
            canChange={canChangeType}
          />
        </div>
        {KycElements.map((kycElement) => (
          <KYCElement
            key={kycElement.name}
            handleImageUpload={handleImageUpload}
            kycElement={kycElementsState}
            name={kycElement.name}
            label={kycElement.label}
          />
        ))}
        {kycStatus && (
          <div className="py-8">
            <Link href="/dashboard/exchange/buy">
              <button className="bg-orange-500 text-white px-12 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm rounded-lg">
                Complete KYC
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default KycUpload;
