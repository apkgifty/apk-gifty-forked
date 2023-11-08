// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: Request, res: Response) {
  //   const body = await req.json();
  //   console.log(body);

  const headersList = headers();
  const referer = headersList.get("referer");

  const refererArr = referer?.split("/");
  refererArr?.splice(0, 3);

  const verifyPath = refererArr?.join("/");
  // console.log(verifyPath);

  //   let data = JSON.stringify({
  //     ...body,
  //     lastname: "",
  //     password_confirmation: body.password,
  //   });

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `https://test.apkxchange.com/api/${verifyPath}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // data: data,
  };

  try {
    const response = await axiosInstance(config);

    return NextResponse.json(response.data);
  } catch (error: any) {
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
