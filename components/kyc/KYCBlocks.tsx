import React from "react";
import Image from "next/image";
import UploadSvg from "../UI/SvgIcons/UploadSvg";

interface Props {
  label: string;
  handleFileUpload: any;
  file: any;
}

const KYCBlocks: React.FC<Props> = ({ label, handleFileUpload, file }) => {
  // console.log(file);
  return (
    <div className="relative flex flex-col items-center gap-y-10 px-8 py-8 border border-dashed border-gray-500 rounded-xl ">
      <p className="absolute top-0 -mt-3 text-sm text-gray-500 bg-tertiary">
        {label}
      </p>
      <div className="w-full flex flex-col items-center space-y-1">
        <div className="text-sm">
          <UploadSvg />
        </div>
        <p className="text-sm">Drop Your Files Here</p>
        {file ? (
          <p className="text-xs text-gray-500">{file.name}</p>
        ) : (
          <p className="text-xs text-gray-500">Maximum size of image 1mb</p>
        )}
      </div>

      <div className="relative">
        <button className="bg-orange-500 text-white px-3 py-2 text-sm rounded-lg ">
          Browse
        </button>
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="fileInput"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
};

export default KYCBlocks;
