// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const formData = await req.formData();
  const front_image = formData.get("front_image");
  const back_image = formData.get("back_image");
  const face_image = formData.get("face_image");

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `${process.env.API_ENDPOINT}/kyc`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  };

  // console.log(front_image, back_image, face_image);

  try {
    const response = await axiosInstance(config);
    // console.log(response);
    return NextResponse.json(response.data);
  } catch (error: any) {
    // console.log(error.request);
    // console.log(error.response);
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
