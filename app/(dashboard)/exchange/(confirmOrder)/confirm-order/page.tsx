import AddSvg from "@/components/UI/SvgIcons/AddSvg";
import EllipsesSvg from "@/components/UI/SvgIcons/EllipsesSvg";
import EmotionSvg from "@/components/UI/SvgIcons/EmotionSvg";
import EyeSvg from "@/components/UI/SvgIcons/EyeSvg";
import HeadphoneSvg from "@/components/UI/SvgIcons/HeadphoneSvg";
import InfoSvg from "@/components/UI/SvgIcons/InfoSvg";
import PaperPlaneSvg from "@/components/UI/SvgIcons/PaperPlaneSvg";
import PhoneSvg from "@/components/UI/SvgIcons/PhoneSvg";
import React from "react";

const ConfirmOrder = () => {
  return (
    <div className="w-full bg-secondary px-4 h-screen flex flex-col  text-white  lg:flex-row lg:px-0 ">
      <div className="px-10 w-full lg:w-[60%]">
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Confirm order information</h3>
        </div>
        <div className="flex gap-x-6">
          <p className="text-gray-400">
            Gift Card Value You Will Sell{" "}
            <span className="text-white">:- $399</span>
          </p>
          <p className="text-gray-400">
            Cash You WIll Receive <span className="text-white">:- $299</span>
          </p>
        </div>

        <div className="mt-14">
          <h4 className="text-lg font-semibold">Order Instructions </h4>
          <ul className="list-disc space-y-2 mt-6 px-8">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <p>After Transfering the amount, click on the Transfered button</p>
        </div>
        <div className="mt-8 space-y-4 flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0">
          <button className="w-full text-sm px-4 py-2 bg-[#7995f5] rounded-lg">
            Recieved Payment, Release Gift Card
          </button>
          <button className="w-full text-sm px-4 py-2">Cancel Transfer</button>
        </div>
        <div className="flex mt-10 flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 ">
          <button className="w-full flex justify-center gap-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm">
            <HeadphoneSvg />
            Help center
          </button>
          <button className="w-full flex justify-center gap-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm">
            <InfoSvg />
            Report
          </button>
          <button className="w-full flex justify-center gap-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm">
            <EyeSvg />
            Track Transaction
          </button>
        </div>
      </div>
      <div className="w-full  flex-grow  h-full relative mt-20 py-4  border-l border-tertiary lg:w-[35%] lg:mt-0">
        <div className="w-full flex justify-between px-4  ">
          <div className="flex gap-x-3">
            <div className="">
              <img
                className="object-cover w-10 h-10 rounded-lg"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                alt=""
              />
            </div>
            <div>
              <p className="font-semibold">Tom Gravesen</p>
              <p className="text-gray-500 text-sm">Online</p>
            </div>
          </div>
          <div className="flex gap-x-2">
            <button className="px-3 py-3 bg-primary rounded-lg ">
              <PhoneSvg />
            </button>
            <button className="px-3 py-3 bg-primary rounded-lg">
              <EllipsesSvg />
            </button>
          </div>
        </div>
        <div className="px-4  ">
          <div className="w-full flex justify-center mt-10">
            <p className="text-xs font-light">Today, 8:26 AM</p>
          </div>
          <div className="my-10">
            <p>Hello Linh!</p>
          </div>

          <div className="my-10">
            <p>I really love your work, great job</p>
            <span className="text-gray-400 text-xs mt-6 block">03:49PM</span>
          </div>

          <div className="my-10 flex justify-end ">
            <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
              <p>Hi Tom</p>
            </div>
          </div>
          <div className="my-10 flex justify-end ">
            <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
              <p>Thank you, i also love it</p>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 flex py-6 items-center justify-between px-4   ">
          <div className="flex gap-x-2 ">
            <button className="px-3 py-3 bg-primary rounded-lg ">
              <EmotionSvg />
            </button>
            <button className="px-3 py-3 bg-primary rounded-lg ">
              <AddSvg />
            </button>
          </div>
          <div className="w-full  mx-4">
            <input
              placeholder="Type Something..."
              className="bg-transparent text-gray-500 text-sm w-full outline-none"
            />
          </div>
          <button className="px-2 py-2 bg-[#7995f5] rounded-lg ">
            <PaperPlaneSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
