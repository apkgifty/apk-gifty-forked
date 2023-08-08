import Pusher from "pusher";

import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const pusher = new Pusher({
    appId: "1630971",
    key: "e597b63b0a16d6c4a2c6",
    secret: "9213167c7ce619f23cb5",
    cluster: "mt1",
    useTLS: true,
  });
  const { message, sender } = await req.json();

  console.log(message, sender);

  try {
    const response = await pusher.trigger("private-chatify.2", "messaging", {
      sender,
      message,
    });

    NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
}
