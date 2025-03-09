import axios from "axios";

import AppLayout from "@/components/Layout/AppLayout";
import MainButton from "@/components/Main/MainButton";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import DataCardMain from "@/components/Main/Section/DataCardMain";
import BankCardMain from "@/components/Main/Section/BankCardMain";
import DownloadApp from "@/components/Main/Section/DownloadApp";
import HeaderActionCard from "@/components/Main/HeaderActionCard";
import { currenciesState } from "@/redux/features/currenciesSlice";
import RatesBar from "@/components/Nav/RatesBar";
import Adbar from "@/components/Nav/Adbar";
import RecentTrades from "@/components/Main/Section/RecentTrades";
import FeaturesSection from "@/components/Main/Section/FeaturesSection";

const HomePage = async () => {
  const response = await axios.get(`${process.env.API_ENDPOINT}/currencies`);

  const currencies: currenciesState[] = response.data.data;

  return (
    <>
      <RatesBar />
      <Adbar />
      <div className="w-full text-white">
        <div
          className="w-full px-4 py-[74px] lg:h-[580px] min-[1750px]:h-[900px]  flex justify-center relative"
          // style={{
          //   backgroundImage: "url(/images/home-banner.webp)",
          // }}
        >
          <Image
            src={"/images/apkhero.webp"}
            fill
            alt="apx home banner image"
            objectFit="cover"
            objectPosition="center"
            priority
            quality={100}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 lg:opacity-40"></div>

          <div className="w-full  text-center z-10 ">
            <div className="space-y-3 ">
              <h1 className="text-3xl   lg:text-5xl font-bold ">
                Trade Gift Cards with APKXCHANGE
              </h1>
            </div>
            <HeaderActionCard loadedCurrencies={currencies} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center  py-24  lg:pt-10 lg:pb-20  lg:bg-secondary">
          <AppLayout>
            {/* <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl lg:text-4xl font-bold text-center px-8">
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
            </div> */}

            <RecentTrades />

            <div className="w-full flex flex-col items-start justify-center mt-16 bg-tertiary roounded-md py-32 space-y-6 rounded-lg relative">
              <Image
                src={
                  "https://s3-alpha-sig.figma.com/img/afa5/729f/57c1d778e4dfc9c07809dfc2e41df210?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n3AoaKnl2Lt770VD1sd61G9Ud6sSI8iVNwnQigFo7WYuO9E0xfj3AHxOeydeSKkAqXPHgXXCYwngAzSAk5MzBVlKjOZGlIth~qCwUB~vUT3~YF2OiXnPn1pnYF657hMtPIM9o9-b3RyDTHzJuu32qk0hc9x4c1ijaKyHVW7NNRoR1g9DsSTrHUpCaPx4yIANZLCIHSA8ND56x5whflBgHktzibry3NUDTsUnH~QfLnwgVNkcvY3VqOBJNn0NEtcmkwwpfLxgz3CkzDdHhkxY-dgWoQHTlif4MP3wFGQlLQ3c~--zKGHgr~~5SFinx~nBjWq98QuXw7UtJ43MYyKAaw__"
                }
                alt="main mid banner"
                fill
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
              <div className="lg:pl-24 text-center z-10 ">
                <div className="max-w-[250px] lg:max-w-[430px] space-y-3 ">
                  <h1 className="text-xl   lg:text-3xl font-bold ">
                    <span className="text-[#1984FF]"> Trade </span>your
                    giftcards <br /> at the
                    <span className="text-[#1984FF]"> best rates</span>
                  </h1>
                  {/* <DownloadApp /> */}
                </div>
              </div>
            </div>

            {/* <div className="w-full flex flex-col items-center justify-center mt-16 bg-tertiary roounded-md py-8 px-8 lg:px-0 space-y-6">
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
            </div> */}

            <FeaturesSection />

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
            <div className="w-full flex flex-col items-center justify-center mt-16  py-3 px-8 lg:px-0 space-y-2">
              <p>Rate Us:</p>
              <div className="bg-white">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/87c5/33a0/9d1ebe4cb3185a3b4caa6ed49a600f25?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LxFKquKiMd4KzQh8rEf-ZUAeJcNhorHDcR83PYq67MZaEkARSgUPBWZgqb0NGV-eC~eEEpNncYzOvx4ciMIo4t1Ny9itekYKiyFYH2ZLPLeRcZNj5xo5Wz3Cht6z2VQn-L0uY96yY6~3Cmc2Iam1cFPlTufNEdxvPw7HyDOH-JtkzKOVkUfX6Q4vOKGxQ~q9KLBrsMTDmTzeZMxfkr-Xe0AzXaNlc9cUwWc83V5gtBiCoChm90~H706Yz6B78fEJctAQ3OFyjW2L12R95IkqDVoxRq-o77A~78oksfzaZNBzfpTTT5YmMmb~GNE5ojyEwkTXDTaWHViU-oxaj5aWPQ__"
                  width={120}
                  height={120}
                  alt="trust pilot"
                />
              </div>{" "}
            </div>
          </AppLayout>
        </div>
      </div>
    </>
  );
};

export default HomePage;
