import Image from "next/image";
import React from "react";
import Link from "next/link";
import EllipsesSvg from "@/components/UI/SvgIcons/EllipsesSvg";

const TutorialsPage = () => {
  return (
    <div className="w-full text-white pb-32">
      <div className="w-full flex items-center justify-between pb-6 border-b-2 border-black">
        <p className="text-base font-semibold">Tutorials</p>
        <div className="px-3 py-2 bg-primary rounded-lg flex items-center gap-x-3 cursor-pointer">
          <span>
            <EllipsesSvg />
          </span>
          {/* <span className="text-sm lg:text-base">...</span> */}
        </div>
      </div>

      <div className="mt-10  space-y-4">
        <Link className="block" href="https://youtu.be/U8SSWoKknBY">
          <div className="flex items-center bg-secondary px-10 py-4 space-x-2 rounded-lg">
            <Image
              src={"/images/youtube.png"}
              alt="youtube"
              width={50}
              height={50}
            />
            <p className="text-sm text-blue-500 underline ">
              Sell Gift Cards At Best Market Rate For Cash USDT and Mobile Money
            </p>
          </div>
        </Link>
        <Link
          className="block"
          href="https://youtube.com/shorts/1xJ2YsmeonE?feature=share"
        >
          <div className="flex items-center bg-secondary px-10 py-4 space-x-2 rounded-lg">
            <Image
              src={"/images/youtube.png"}
              alt="youtube"
              width={50}
              height={50}
            />
            <p className="text-sm text-blue-500 underline ">
              Buy Affordable Data Bundles in Ghana(MTN, AIrtelTigo, Telecel)
              sith ApkXchange.
            </p>
          </div>
        </Link>

        <Link
          className="block"
          href="https://youtube.com/shorts/4a1IXimHHkk?feature=share"
        >
          <div className="flex items-center bg-secondary px-10 py-4 space-x-2 rounded-lg">
            <Image
              src={"/images/youtube.png"}
              alt="youtube"
              width={50}
              height={50}
            />
            <p className="text-sm text-blue-500 underline ">
              How To Buy Popular Gift Cards At 20% or More Discounts with
              ApkXchange
            </p>
          </div>
        </Link>

        <div className="inline-block px-1 py-2  bg-white rounded-lg ml-6 mt-12 cursor-pointer">
          <Link href="/faqs">
            <p className="text-sm text-blue-400  font-semibold">
              Frequently Asked Questions
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
