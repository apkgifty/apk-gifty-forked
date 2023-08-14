import AboutBlock from "@/components/Main/AboutBlock";
import Banner from "@/components/Main/Banner";
import MainButton from "@/components/Main/MainButton";
import AboutDiscountSvg from "@/components/UI/SvgIcons/AboutDiscountSvg";
import AboutCryptoSvg from "@/components/UI/SvgIcons/AboutCryptoSvg";
import AboutSecureSvg from "@/components/UI/SvgIcons/AboutSecureSvg";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Banner />
      <div className="px-10 lg:px-24 xl:max-w-[1270px] 2xl:max-w-[1450px] lg:mx-auto">
        <div className="w-full flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 ">
          <div className="flex-1 flex w-full">
            <div className="w-[70%] h-[200px] lg:h-[300px] -mt-10 relative border-2 border-blue-600 rounded-lg">
              <Image
                src={"/images/aboutdesk.webp"}
                fill
                alt="preview of apkxchange on desktop"
                className="rounded-lg"
              />
            </div>
            <div className="w-[30%] h-[230px] lg:h-[350px] mt-8 -ml-10 relative border-2 border-blue-600 rounded-lg">
              <Image
                src={"/images/aboutmobile.webp"}
                fill
                alt="preview of apkxchange on desktop"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 pt-8 lg:pt-32">
            <AboutBlock title="What is APK Xchange">
              <p className="text-xs lg:text-sm">
                ApkXchange is the ultimate destination for savvy shoppers
                looking to purchase gift cards at discounted rates. We offer a
                wide variety of gift cards, including popular brands like
                iTunes, Amazon, and more. What sets us apart is our commitment
                to providing the best deals, allowing you to buy a $100 iTunes
                gift card for as low as $80! But that&apos;s not all – we go
                beyond just buying gift cards. ApkXchange also offers a unique
                service to sell your gift cards for cryptocurrencies like
                Bitcoin or USDT, providing you with even more flexibility and
                value.
              </p>
            </AboutBlock>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-8  mt-12 lg:flex-row lg:items-start lg:gap-x-24 lg:gap-y-0">
          <AboutBlock title="Secure & Efficient" icon={<AboutSecureSvg />}>
            <p className="text-xs lg:text-sm">
              Trust is paramount to us. Our secure system ensures your
              transactions are safe, and our fast processes enable quick and
              hassle-free buying and selling experiences.
            </p>
          </AboutBlock>
          <AboutBlock
            title="Discounted Gift Cards"
            buttonText="Buy/Sell"
            link="/exhange/buy"
            icon={<AboutDiscountSvg />}
          >
            <p className="text-xs lg:text-sm">
              ApkXchange is the go-to platform for finding gift cards at
              unbeatable prices. Save money while still enjoying your favorite
              brands and services
            </p>
          </AboutBlock>
          <AboutBlock
            title="CryptoCurrency Trading"
            buttonText="Read More"
            icon={<AboutCryptoSvg />}
          >
            <p className="text-xs lg:text-sm">
              For those interested in the world of cryptocurrency, we offer a
              seamless way to acquire crypto by trading your gift cards, making
              it easy to enter the digital currency market.
            </p>
          </AboutBlock>
        </div>
      </div>
      <div className="w-full flex  justify-center items-center mt-8 bg-[#353945] py-8 lg:bg-transparent ">
        <div>
          <Image
            src={"/images/101.webp"}
            width={200}
            height={150}
            alt="gift-image"
          />
        </div>
        <div className="text-white">
          <h4 className="text-base font-light">Join Us Today!</h4>
          <p className="text-sm lg:text-base font-bold">TRADE SECURE,</p>
          <p className="text-sm lg:text-base font-bold">TRADE WITH TRUST</p>
          <div className="mt-2">
            <MainButton
              buttonText="Create Account"
              link="/signup"
              className="text-sm lg:text-base"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
