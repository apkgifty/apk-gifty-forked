// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const accessToken = await req.headers.get("Authorization");

  let data = JSON.stringify({
    ...body,
  });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://backend.apkxchange.com/api/product/order",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: accessToken,
    },
    data: data,
  };

  try {
    const response = await axios(config);
    console.log(response);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
