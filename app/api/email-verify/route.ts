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
  console.log(verifyPath);
  // console.log(verifyPath);

  //   let data = JSON.stringify({
  //     ...body,
  //     lastname: "",
  //     password_confirmation: body.password,
  //   });
  // https://test.apkxchange.com/api/email/verify/1054/6f410fc743a52863a701f3a73bd1520afa760936?expires=1721690906&signature=def4aa4d8f23c50890ad2ce887cc6726aaf6f8bb2ec98b24cb9cba07d2b99a5
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${process.env.API_ENDPOINT}/${verifyPath}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // data: data,
  };

  try {
    const response = await axiosInstance(config);
    // console.log(response.data);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log(error.response);
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
