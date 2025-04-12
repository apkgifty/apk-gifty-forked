"use client";

import React, { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import Image from "next/image";

import EmotionSvg from "@/components/UI/SvgIcons/EmotionSvg";
import PhoneSvg from "@/components/UI/SvgIcons/PhoneSvg";
import EllipsesSvg from "@/components/UI/SvgIcons/EllipsesSvg";
import PaperPlaneSvg from "@/components/UI/SvgIcons/PaperPlaneSvg";
import AddSvg from "@/components/UI/SvgIcons/AddSvg";

import "./Chat.css";

const pusherKey = process.env.NEXT_PUBLIC_PUSHER_APP_KEY;
const cluster = process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!;

const getOldMessages = async (id: string, token: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/history/order/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data.messages;
  } catch (error) {
    console.log(error);
  }
};

const Chat = ({
  status,
  is_paid,
  chat,
  token,
  id,
}: {
  status: string;
  is_paid?: string;
  chat: any;
  token: any;
  id: string;
}) => {
  // console.log(chat);
  //   console.log(pusherKey, cluster);
  // console.log(status);
  const [chats, setChats] = useState<any>([]);
  const [oldChats, setOldChats] = useState<any>("");
  const [userInfo, setUserInfo] = useState<any>();
  const [messageToSend, setMessageToSend] = useState("");
  const [fileToSend, setFileToSend] = useState<any>(null);
  const [base64Image, setbase64Image] = useState<any>(null);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   chatBottomRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "end",
  //   });
  //   console.log(chatBottomRef.current);
  // }, []);

  useEffect(() => {
    const user: any = localStorage.getItem("userInfo");
    const updateMessages = async () => {
      const messages = await getOldMessages(id, token);
      console.log(messages);
      setOldChats(messages);
    };

    updateMessages();

    setUserInfo(JSON.parse(user));
  }, []);

  useEffect(() => {
    const pusher = new Pusher("e597b63b0a16d6c4a2c6", {
      cluster: "mt1",
      channelAuthorization: {
        endpoint: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/chat/auth`,
        transport: "ajax",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
      userAuthentication: {
        endpoint: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/chat/auth`,
        transport: "ajax",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    });

    pusher.signin();

    pusher.connection.bind("error", (err: any) => {
      if (err) {
        console.log(err);
      }
    });

    // console.log(userInfo);

    const channel = pusher.subscribe(`private-chatify.${userInfo?.id}`);
    // const channel = pusher.subscribe(`private-order.${userInfo?.id}`);
    // console.log(channel);

    channel.bind("messaging", (data: any) => {
      // console.log(data);
      setChats((prevState: any) => [
        ...prevState,
        { sender: data.sender, message: data.message },
      ]);
    });

    channel.bind("completed", (data: any) => {
      // console.log(data);
    });

    return () => pusher.unsubscribe(`private-chatify.${userInfo?.id}`);
    // return () => pusher.unsubscribe(`private-order.${userInfo?.id}`);
  }, [userInfo]);

  // console.log(chats);

  const handleMessage = (e: any) => {
    setMessageToSend(e.target.value);
  };

  const handleFileupload = (e: any) => {
    const file = e.target.files[0];
    setFileToSend(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setbase64Image(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReply = async (e: any) => {
    e.preventDefault();
    const message = !fileToSend ? fileToSend : messageToSend;
    const userTextMessage = messageToSend;
    setMessageToSend("");
    let html: any;

    if (!fileToSend) {
      html = `<div class="px-4 py-2 bg-[#7995f5] rounded-xl ">
      <p
        className="text-[14px]"
        
      ><span>${messageToSend}</span></p>
    </div>`;
    } else {
      html = `<div className="w-full px-4">
          <div className="w-[150px] h-[150px] bg-white rounded-xl relative">
            <Image src=${base64Image} alt="selected image" width=250px height=250px />
          </div>
        </div>`;
    }

    setChats((prevState: any) => [
      ...prevState,
      { message: `${html}`, userId: userInfo.id },
    ]);
    const formData = new FormData();

    formData.append("sender", userInfo.firstname);
    formData.append("message", userTextMessage);
    formData.append("file", fileToSend);
    formData.append("id", "1");
    // console.log(formData);

    try {
      await axios.post("/api/pusher", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      //Was posting before adding to chat but now adding to chat before posting, optimistic update
      // setChats((prevState: any) => [
      //   ...prevState,
      //   { message: `${html}`, userId: userInfo.id },
      // ]);

      // if (messageToSend === "") return;
      // setMessageToSend("");
      setFileToSend(null);
      setbase64Image(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {status.toString() === "1" || is_paid === "1" ? (
        <div className="w-full   flex-grow flex flex-col  h-[750px] relative mt-20 py-4  lg:border-l-2 lg:border-tertiary lg:w-[35%] lg:mt-0 lg:h-full shadow-2xl ">
          <div className="w-full flex flex-1 justify-between px-4  ">
            <div className="flex gap-x-3">
              <div className="">
                {/* <img
                  className="object-cover w-10 h-10 rounded-lg"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                  alt=""
                /> */}
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-pink-400 rounded-full ">
                  <span className="font-medium text-gray-600 ">A</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Admin</p>
                <p className="text-gray-500 text-sm">Online</p>
              </div>
            </div>
            {/* <div className="flex gap-x-2">
              <button className="px-3 py-3 bg-primary rounded-lg ">
                <PhoneSvg />
              </button>
              <button className="px-3 py-3 bg-primary rounded-lg">
                <EllipsesSvg />
              </button>
            </div> */}
          </div>
          <div className="px-4 pt-10 h-full flex-2 overflow-scroll ">
            {/* <div className="w-full flex justify-center mt-10">
              <p className="text-xs font-light">Today, 8:26 AM</p>
            </div> */}
            {/* <div className="my-10">
              <p>Hello Linh!</p>
            </div> */}
            {/* <div className="my-10">
              <p>I really love your work, great job</p>
              <span className="text-gray-400 text-xs mt-6 block">03:49PM</span>
            </div> */}
            {/* {chats.map((chat: any) => (
              <div key={chat.message} className="my-10 flex justify-end ">
                <div className="px-4 py-3 bg-[#7995f5] rounded-xl">
                  <p>{chat.message}</p>
                </div>
              </div>
            ))} */}
            <div dangerouslySetInnerHTML={{ __html: oldChats }}></div>
            {chats.map((chat: any) =>
              chat.userId === userInfo.id ? (
                <div
                  key={chat.message}
                  className="my-4 flex justify-end "
                  dangerouslySetInnerHTML={{ __html: chat.message }}
                ></div>
              ) : (
                <div
                  key={chat.message}
                  dangerouslySetInnerHTML={{ __html: chat.message }}
                ></div>
              )
            )}
          </div>

          <div ref={chatBottomRef} />

          {fileToSend && (
            <div className="w-full px-4">
              <div className="w-full h-[280px] bg-white rounded-xl relative">
                <Image
                  src={base64Image === null ? "" : base64Image}
                  alt="selected image"
                  fill
                />
              </div>
            </div>
          )}

          <form
            onSubmit={handleReply}
            className="w-full  bg-secondary  flex flex-1 py-6 items-center justify-between px-4   "
          >
            <div className="flex gap-x-2 ">
              <button
                className="px-3 py-3 bg-primary rounded-lg "
                type="button"
              >
                <EmotionSvg />
              </button>
              <div className="relative">
                <button
                  className="px-3 py-3 bg-primary rounded-lg "
                  type="button"
                >
                  <AddSvg />
                </button>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="fileInput"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileupload}
                />
              </div>
            </div>

            <div className="w-full  mx-4">
              <input
                value={messageToSend}
                placeholder="Type Something..."
                className={`bg-transparent text-white text-sm w-full outline-none ${
                  fileToSend && "sr-only"
                }`}
                onChange={handleMessage}
              />
            </div>
            <button type="submit" className="px-2 py-2 bg-[#7995f5] rounded-lg">
              <PaperPlaneSvg />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default Chat;
