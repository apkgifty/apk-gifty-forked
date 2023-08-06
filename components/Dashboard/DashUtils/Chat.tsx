"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

import EmotionSvg from "@/components/UI/SvgIcons/EmotionSvg";
import PhoneSvg from "@/components/UI/SvgIcons/PhoneSvg";
import EllipsesSvg from "@/components/UI/SvgIcons/EllipsesSvg";
import PaperPlaneSvg from "@/components/UI/SvgIcons/PaperPlaneSvg";
import AddSvg from "@/components/UI/SvgIcons/AddSvg";

import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";

const pusherKey = process.env.NEXT_PUBLIC_PUSHER_APP_KEY;
const cluster = process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!;

const Chat = ({ status, chat }: { status: string; chat: any }) => {
  console.log(chat);
  //   console.log(pusherKey, cluster);
  console.log(status);
  const [chats, setChats] = useState<any>([]);
  const [messageToSend, setMessageToSend] = useState("");

  // useEffect(() => {
  //   const pusher = new Pusher("e597b63b0a16d6c4a2c6", {
  //     cluster: "mt1",
  //   });

  //   pusher.connection.bind("error", (err: any) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   });

  //   const channel = pusher.subscribe("channel-name");

  //   pusher.allChannels().forEach((channel) => console.log(channel));

  //   channel.bind("my-event", (data: any) => {
  //     console.log(data);
  //     setChats((prevState: any) => [
  //       ...prevState,
  //       { sender: data.sender, message: data.message },
  //     ]);
  //   });

  //   return () => pusher.unsubscribe("channel-name");
  // }, []);

  // console.log(chats);
  return (
    <>
      {status.toString() === "1" ? (
        <div className="w-full   flex-grow flex flex-col  h-[750px] relative mt-20 py-4  lg:border-l-2 lg:border-tertiary lg:w-[35%] lg:mt-0 lg:h-full ">
          {/* <ChatEngineWrapper>
            <Socket
              projectID={"aac6336c-0184-4516-9c7f-2725ca8ec69a"}
              userName={"huntdavid175@gmail.com"}
              userSecret={"huntdavid175@gmail.com"}
            />
            <ChatFeed activeChat={chat?.id} />
          </ChatEngineWrapper> */}

          <div className="w-full flex flex-1 justify-between px-4  ">
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
          <div className="px-4 h-full flex-2 overflow-scroll ">
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
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>{" "}
            <div className="my-10 flex justify-end ">
              <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                <p>Thank you, i also love it</p>
              </div>
            </div>
          </div>
          <div className="w-full  bg-secondary  flex flex-1 py-6 items-center justify-between px-4   ">
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
      ) : null}
    </>
  );
};

export default Chat;
