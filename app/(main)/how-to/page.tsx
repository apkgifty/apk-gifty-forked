import AppLayout from "@/components/Layout/AppLayout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowToPage = () => {
  return (
    <div className="">
      <AppLayout>
        <div className="w-full pb-32 bg-secondary h-full">
          <div className="w-full h-[160px] lg:h-[260px] relative">
            <Image
              src={"/images/howto.png"}
              fill
              alt="how to get started"
              className="object-cover"
            />
          </div>
          <div className="w-full px-4 lg:px-8 mt-8">
            <h2 className="text-lg lg:text-2xl font-semibold text-blue-700">
              How to install ApkXchange on iPhone/ios
            </h2>
            <p className="text-base text-white my-4">
              I Can&apos;t Find ApkXchange on App Store{" "}
            </p>
            <p className="text-xs lg:text-sm text-white">
              Unfortunately Apple is not friendly to Digital products and
              crypto-related apps, so ApkXchange app may not show up in your App
              Store search. But Here is a simple solution.
            </p>

            <h3 className="text-lg lg:text-xl text-blue-700 mt-4">
              How to install ApkXchange on iPhone / iOS steps
            </h3>
            <ol className="text-xs lg:text-sm text-white list-decimal space-y-4 mt-4 ml-4">
              <li>Open Safari on your iPhone.</li>
              <li>
                Go to apkxchange.com and log in your account. You should see
                your Dashboard.
              </li>
              <li>
                Tap the share button at the bottom and choose &quot;Add to Home
                Screen&quot;.
              </li>
              <li>
                Tap Add to confirm. The ApkXchange icon will now be on your Home
                Screen just like the App.
              </li>
            </ol>

            <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row mt-12">
              <Image
                src={"/images/phone1.webp"}
                alt="how to get started"
                width={256}
                height={256}
              />
              <Image
                src={"/images/phone2.webp"}
                alt="how to get started"
                width={256}
                height={256}
              />
              <Image
                src={"/images/phone3.webp"}
                alt="how to get started"
                width={256}
                height={256}
              />
            </div>
            <div className="inline-block px-1 py-2  bg-white rounded-lg ml-6 mt-12 cursor-pointer">
              <Link href="/faqs">
                <p className="text-sm text-blue-400  font-semibold">
                  Frequently Asked Questions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default HowToPage;
