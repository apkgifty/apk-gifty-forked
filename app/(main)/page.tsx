import AppLayout from "@/components/Layout/AppLayout";
import MainButton from "@/components/Main/MainButton";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="w-full text-white">
      <div
        className="w-full py-[74px] lg:h-[580px] min-[1750px]:h-[900px] flex justify-center items-center bg-cover bg-no-repeat bg-left lg:justify-start"
        style={{
          backgroundImage: "url(/images/home-banner.webp)",
        }}
      >
        <div className="lg:pl-24 text-center w-full justify-center ">
          <div className="max-w-[250px] lg:max-w-[430px] space-y-3 ">
            <h1 className="text-3xl   lg:text-5xl font-bold ">
              Trade Gift Cards on APKXCHANGE
            </h1>
            <p className="text-center  ">
              Join over 1 million users just like you on this platform to buy
              and sell gift cards.
            </p>

            <MainButton
              className="lg:text-xl mt-2"
              link="/signup"
              buttonText="Get Started"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-10 py-24 lg:gap-y-20 lg:py-44 ">
        <div className="w-full flex flex-col  items-center">
          <div className="bg-white  px-6 w-[90%] lg:px-12 lg:w-[700px] py-4 text-black rounded-full inline-flex flex-col gap-x-2 lg:flex-row">
            <p className="w-[110] lg:w-auto text-sm lg:text-2xl font-bold">
              Need Gift Cards?
            </p>
            <MainButton
              buttonText="BUY NOW"
              link="/dashboard/exchange/buy"
              className="text-xs lg:text-xl"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className=" bg-white px-6 w-[90%] lg:px-12 lg:w-[700px] py-4 text-black rounded-full inline-flex flex-col items-end lg:flex-row lg:justify-end gap-x-2">
            <p className="w-[160px] lg:w-auto text-sm lg:text-2xl font-semibold">
              Need To Sell Your Gift Cards?
            </p>
            <MainButton
              buttonText="SELL NOW"
              link="/dashboard/exchange/buy"
              className="text-xs lg:text-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full -mt-28  lg:-mt-80">
        {/* <Image
          src={"/images/midbanner.webp"}
          width={0}
          height={0}
          sizes="30vh"
          style={{ width: "100%", height: "auto" }}
          alt="mid banner"
        /> */}
        <img src="/images/midbanner.webp" alt="mid banner" className="w-full" />
      </div>
      <div
        className="bg-cover bg-no-repeat bg-center py-20"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/d803/1f34/7ce80b24b7534f0e0d607116a74dc793?Expires=1691971200&Signature=aVjhf6Pshc7pVs2SaeU~chPy0-F-zSlbiLXazAU1sMzpVgIrKa8sgfWlSPKirwo4FMpIDgaaqqVoMet~xtDd0xfvkVOJObSb4z638tUzLK~aBSZLgagU6cwCZrocF7spmj1McDh7XgHo0AxHAXm8EbgduZ8AWeC0UYHIaztKlYuJv1i1ADrYMSImO73ueNP2fk302ztrax3hRPNTZF8yO-H3-5U4IWhpaDAos4A9FTuz-PMOdxv8eJkjAl8tFaVfByI1WEVR0GNBpQTlExZLJHTnVBcyyxkEsU4fSI-ld7NOnYzgGqtWyfJwNS-GMP3tTkjupAz5UtpZSSyqavdKPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
        }}
      >
        <AppLayout>
          <div className="flex flex-col justify-center gap-y-2 items-center  lg:flex-row lg:gap-x-8 lg:gap-y-0">
            <div>
              <p className="text-sm lg:text-xl font-semibold">
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
  );
};

export default HomePage;
