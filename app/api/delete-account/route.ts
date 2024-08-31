// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: Response) {
  let config = {
    method: "DELETE",
    maxBodyLength: Infinity,
    url: `${process.env.API_ENDPOINT}/account`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axiosInstance(config);
    //console.log(response);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
