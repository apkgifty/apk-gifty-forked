import React from "react";
import Image from "next/image";
import MiniLoader from "../UI/Loader/MiniLoader";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface KYCElementProps {
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  kycElement: KycElementState;
  name: string;
  label: string;
}

interface KycElementState {
  [key: string]: {
    loading: boolean;
    uploaded: boolean;
  };
}

const KYCElement: React.FC<KYCElementProps> = ({
  handleImageUpload,
  kycElement,
  name,
  label,
}) => {
  return (
    <div className="w-[255px] h-[150px] bg-gray-300 text-zinc-800 flex flex-col justify-center items-center rounded-lg relative cursor-pointer">
      {kycElement[name].loading ? (
        <MiniLoader />
      ) : kycElement[name].uploaded ? (
        <Image
          src={"/images/verified.png"}
          alt="uploaded-badge"
          width={100}
          height={100}
        />
      ) : (
        <>
          <CameraAltIcon className="" />
          <span className="text-xs">{label}</span>
        </>
      )}

      {!kycElement[name].uploaded && (
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="fileInput"
          accept=".jpg, .jpeg, .png"
          name={name}
          onChange={handleImageUpload}
        />
      )}
    </div>
  );
};

export default KYCElement;
