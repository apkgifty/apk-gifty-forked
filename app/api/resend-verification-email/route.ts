// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function GET(req: Request, res: Response) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  //   const body = await req.json();
  //   console.log(body);

  //   let data = JSON.stringify({
  //     ...body,
  //     lastname: "",
  //     password_confirmation: body.password,
  //   });

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${process.env.API_ENDPOINT}/email/resend`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    // data: data,
  };

  try {
    const response = await axios(config);

    return NextResponse.json(response.data);
  } catch (error: any) {
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
