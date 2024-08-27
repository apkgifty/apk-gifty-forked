import Image from "next/image";
import React from "react";
import Link from "next/link";

const KycVerificationPage = () => {
  return (
    <div className="w-full py-16 px-8 lg:px-0">
      <div className="flex flex-col justify-center items-center text-white space-y-3 max-w-xl mx-auto">
        <h3 className="text-xl lg:text-3xl font-bold text-center mb-3">
          {" "}
          Let&apos;s Begin Your KYC Process
        </h3>
        <div className="">
          <Image
            src={"/images/kyctop.png"}
            alt="kyc image"
            width={175}
            height={175}
          />
        </div>
        <p className="text-xs lg:text-sm">First let&apos;s get to know you</p>{" "}
        <div>
          <Image
            src={"/images/kycidpic.png"}
            alt="kyc image"
            width={275}
            height={275}
          />
        </div>
        <Link href="/kyc/upload">
          {" "}
          <p className="text-blue-700 text-sm lg:text-md font-bold cursor-pointer">
            Upload Document
          </p>
        </Link>
        <p className="text-xs lg:text-sm text-center">
          When uploading KYC documents, you can provide any of the following:
          National Identity Card, Passport, or Driver&apos;s License.Ensure each
          detail is crystal clear. Opt for well-lit, high-resolution images or
          scans to guarantee smooth verification. Additionally, make sure all
          four corners of the card are visible in the image. Note:+For West
          Africa Users kindly+ use only Ecowas Identity Card for KYC
          verifications
        </p>
      </div>
    </div>
  );
};

export default KycVerificationPage;
