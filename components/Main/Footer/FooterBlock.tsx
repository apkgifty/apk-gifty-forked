import Link from "next/link";
import React from "react";

interface Props {
  headerTitle: string;
  items: { title: string; url: string }[];
}

const FooterBlock: React.FC<Props> = ({ headerTitle, items }) => {
  return (
    <div className=" flex flex-col text-center lg:text-left">
      <h5 className="text-base font-semibold pb-2">{headerTitle}</h5>
      <ul className="space-y-1">
        {items.map((item) => (
          <li className="text-sm font-thin">
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;
