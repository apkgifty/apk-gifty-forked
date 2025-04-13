import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image_url: string;
  link: string;
}

const DealsCardMobile: React.FC<Props> = ({ image_url, link }) => {
  return (
    <Link href={link} className="block w-full h-full">
      <div className="w-full h-full relative rounded-lg overflow-hidden">
        <Image
          src={image_url}
          alt="bank-name"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  );
};

export default DealsCardMobile;
