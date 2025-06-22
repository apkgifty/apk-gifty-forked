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
  handleTradeCompletion,
}: {
  status: string;
  is_paid?: string;
  chat: any;
  token: any;
  id: string;
  handleTradeCompletion: () => void;
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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, oldChats]);

  useEffect(() => {
    const user: any = localStorage.getItem("userInfo");
    const updateMessages = async () => {
      const messages = await getOldMessages(id, token);
      // console.log(messages);
      setOldChats(messages);
    };

    updateMessages();

    setUserInfo(JSON.parse(user));
  }, []);
  // e597b63b0a16d6c4a2c6   -- old pusher key
  useEffect(() => {
    const pusher = new Pusher(pusherKey!, {
      cluster: "mt1",
      wsHost: "sock-prod.twentysoft.com",
      wsPort: 443,
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
      // console.log("The order is completed", data);
      // handleReply(null, "completed");
      handleTradeCompletion();
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

  const handleReply = async (e: any, type: string = "chat") => {
    if (e) {
      e.preventDefault();
    }
    const message = !fileToSend ? fileToSend : messageToSend;
    const userTextMessage = messageToSend;
    setMessageToSend("");
    let html: any;

    if (!fileToSend) {
      if (type === "completed") {
        html = `<div class="px-4 py-2 bg-[#3bae58] rounded-xl ">
      <p
        className="text-[14px]"
        
      ><span className="font-semibold">🎉Success! </span> <br/><span className="text-sm">Your trade has been completed. Don't forget to leave your feedback.</span></p>
    </div>`;
      } else {
        html = `<div class="px-4 py-2 bg-[#7995f5] rounded-xl ">
      <p
        className="text-[14px]"
        
      ><span>${messageToSend}</span></p>
    </div>`;
      }
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
      {status.toString() === "1" ||
      status.toString() === "2" ||
      is_paid === "1" ? (
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
          <div
            className="px-4 pt-10 h-full flex-2 overflow-y-auto chat-container"
            ref={chatContainerRef}
          >
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
            <div ref={chatBottomRef} />
          </div>

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
                  disabled={status.toString() === "2"}
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
      <style jsx global>{`
        .splide__slide {
          transition: transform 0.3s ease;
          display: flex;
          justify-content: center;
        }
        .splide__slide.is-active {
          transform: scale(1.1);
          z-index: 1;
        }
        .splide__track {
          display: flex;
          align-items: center;
        }
        .splide__list {
          display: flex;
          align-items: center;
        }
        .chat-container {
          scroll-behavior: smooth;
          transition: scroll-top 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Chat;
