import AppLayout from "@/components/Layout/AppLayout";
import MainButton from "@/components/Main/MainButton";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import DataCardMain from "@/components/Main/Section/DataCardMain";
import BankCardMain from "@/components/Main/Section/BankCardMain";
import DownloadApp from "@/components/Main/Section/DownloadApp";
import HeaderActionCard from "@/components/Main/HeaderActionCard";
const HomePage = () => {
  return (
    <div className="w-full text-white">
      {/* //something here */}
      <div className="w-full flex flex-col items-center  py-24  lg:pt-32 lg:pb-20  bg-secondary">
        <AppLayout>
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <h3 className="text-2xl lg:text-4xl font-bold text-center">
              Affordable Bundle Offers With{" "}
              <span className="text-[#1984FF]">No Expiry</span>
            </h3>
            <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <DataCardMain imagePath="/images/mtn.png" imageAlt="mtn logo" />
              <DataCardMain
                imagePath="/images/telecel.jpeg"
                imageAlt="telecel logo"
              />
              <DataCardMain
                imagePath="/images/at.jpeg"
                imageAlt="airtel-tigo logo"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-16 bg-tertiary roounded-md py-8 px-8 lg:px-0 space-y-6">
            <h3 className="text-2xl lg:text-4xl font-bold text-center">
              Bank Transactions <br />
              <span className="text-[#1984FF]">With No Fees</span>.
            </h3>
            <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <BankCardMain
                title="Bank transfer to local banks."
                brief="Make bank transactions to your local banks
instantly at 0 fees."
              />
              <BankCardMain
                title="Bank transfer to nigerian banks."
                brief="Make bank transfers to from local banks to 
Nigerian banks swiftly with us."
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-center mt-16 bg-tertiary roounded-md py-16 space-y-6 rounded-lg relative">
            <Image
              src={"/images/main-mid.jpeg"}
              alt="main mid banner"
              fill
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
            <div className="lg:pl-24 text-center z-10 ">
              <div className="max-w-[250px] lg:max-w-[430px] space-y-3 ">
                <h1 className="text-xl   lg:text-3xl font-bold ">
                  Download the <br /> APK XCHANGE mobile app
                </h1>
                <DownloadApp />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-16 bg-tertiary roounded-md py-8 space-y-6 lg:space-x-12">
            <div className="hidden lg:block">
              <Image
                src={"/images/telcosbundle-desktop.png"}
                alt="mid telcos image"
                width={175}
                height={175}
              />
            </div>
            <div className=" lg:hidden">
              <Image
                src={"/images/telcosbundle-mobile.png"}
                alt="mid telcos image"
                width={175}
                height={175}
              />
            </div>
            <div className="text-center ">
              <h3 className="text-2xl lg:text-4xl font-bold text-center">
                Best Bundle Offers.
              </h3>
              <p className="text-sm lg:text-base text-[#05F364]">
                Affordable Non-expiry bundles.
              </p>
              <button className="bg-[#1984FF] text-white text-xs lg:text-sm px-2 py-1 rounded-lg mt-3">
                view offers
              </button>
            </div>
          </div>

          <div className="w-full lg:rounded-3xl">
            {/* <Image
          src={"/images/midbanner.webp"}
          width={0}
          height={0}
          sizes="30vh"
          style={{ width: "100%", height: "auto" }}
          alt="mid banner"
        /> */}
            <img
              src="/images/midbanner.webp"
              alt="mid banner"
              className="w-full lg:rounded-3xl"
            />
          </div>
        </AppLayout>
      </div>
      <div
        className="w-full lg:h-[300px] flex items-center justify-center  py-20 relative"
        // style={{
        //   backgroundImage:
        //     "url(https://s3-alpha-sig.figma.com/img/d803/1f34/7ce80b24b7534f0e0d607116a74dc793?Expires=1691971200&Signature=aVjhf6Pshc7pVs2SaeU~chPy0-F-zSlbiLXazAU1sMzpVgIrKa8sgfWlSPKirwo4FMpIDgaaqqVoMet~xtDd0xfvkVOJObSb4z638tUzLK~aBSZLgagU6cwCZrocF7spmj1McDh7XgHo0AxHAXm8EbgduZ8AWeC0UYHIaztKlYuJv1i1ADrYMSImO73ueNP2fk302ztrax3hRPNTZF8yO-H3-5U4IWhpaDAos4A9FTuz-PMOdxv8eJkjAl8tFaVfByI1WEVR0GNBpQTlExZLJHTnVBcyyxkEsU4fSI-ld7NOnYzgGqtWyfJwNS-GMP3tTkjupAz5UtpZSSyqavdKPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
        // }}
      >
        <Image
          src={"/images/midbannerfoot.webp"}
          fill
          alt="apx mid image banner"
        />
        <div className="z-10 relative">
          <AppLayout>
            <div className="flex flex-col justify-center gap-y-2 items-center  lg:flex-row lg:gap-x-8 lg:gap-y-0 z-10">
              <div>
                <p className="text-sm lg:text-xl font-semibold ">
                  Perform your first <br /> Transaction on
                  <Image
                    src={"/images/apklogo-new.png"}
                    width={90}
                    height={90}
                    alt="apk logo"
                    className="inline-block -mt-4 mx-2"
                  />{" "}
                  today
                </p>
              </div>
              {/* <MainButton
              className="bg-pink-600"
              buttonText="GET STARTED"
              link="/signup"
            /> */}
              <Link href={"/signup"}>
                <button
                  className={`text-white px-4 py-1  font-semibold  text-[10px] lg:text-base rounded-2xl bg-pink-600 `}
                >
                  GET STARTED
                </button>
              </Link>
            </div>
          </AppLayout>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
