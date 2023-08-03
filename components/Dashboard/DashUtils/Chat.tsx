"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

const pusherKey = process.env.NEXT_PUBLIC_PUSHER_APP_KEY;
const cluster = process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!;

const Chat = () => {
  console.log(pusherKey, cluster);
  const [chats, setChats] = useState<any>([]);
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    const pusher = new Pusher("1630971", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("channel-name");
    console.log(channel);

    channel.bind("my-event", (data: any) => {
      console.log(data);
      setChats((prevState: any) => [
        ...prevState,
        { sender: data.sender, message: data.message },
      ]);
    });

    return () => pusher.unsubscribe("channel-name");
  }, []);

  console.log(chats);
  return <div>chats</div>;
};

export default Chat;
