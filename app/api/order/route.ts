// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  let data = JSON.stringify({
    ...body,
  });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `${process.env.API_ENDPOINT}/product/${body.type}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };

  try {
    const response = await axiosInstance(config);
    // console.log(response);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}

// export async function GET(req: Request, res: Response) {
//   const body = await req.json();

//   const { id } = body;

//   let config = {
//     method: "GET",
//     maxBodyLength: Infinity,
//     url: `/api/order/${id}`,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       // Authorization: accessToken,
//     },
//   };

//   try {
//     const response = await axiosInstance(config);

//     return NextResponse.json(response.data);
//   } catch (error: any) {
//     console.log(error);
//     return new Response(JSON.stringify(error.response.data), {
//       status: error.response.status,
//       headers: error.response.header,
//     });
//   }
// }
