import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  const { id } = await body;

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `crypto/payment/${id}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //   Authorization: accessToken,
    },
  };

  try {
    const response = await axiosInstance(config);
    return NextResponse.json(response.data);
  } catch (error: any) {
    // console.log(error);
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
