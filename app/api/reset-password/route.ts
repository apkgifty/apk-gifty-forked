// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  const body = await req.json();

  console.log(body);

  let data = JSON.stringify({
    ...body,
  });

  let config = {
    method: "PATCH",
    maxBodyLength: Infinity,
    url: "https://test.apkxchange.com/api/reset-password",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: data,
  };

  try {
    const response = await axios(config);
    console.log(response);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log(error.response);
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
