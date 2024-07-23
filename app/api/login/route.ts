// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  // console.log(body);

  let data = JSON.stringify({
    ...body,
  });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://test.apkxchange.com/api/login",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };

  try {
    const response = await axiosInstance(config);
    // console.log(response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
