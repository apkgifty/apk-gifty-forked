import React from "react";
import Image from "next/image";

interface DataCardProps {
  imagePath: string;
  imageAlt: string;
}

const DataCardMain: React.FC<DataCardProps> = ({ imagePath, imageAlt }) => {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-12 bg-tertiary space-y-2 rounded-md">
      <Image
        src={imagePath}
        alt={imageAlt}
        width={75}
        height={75}
        className="rounded-full"
      />
      <div>
        <button className="bg-[#45B26B] text-white text-xs lg:text-sm px-2 py-1 rounded-lg">
          view offers
        </button>
      </div>
    </div>
  );
};

export default DataCardMain;
