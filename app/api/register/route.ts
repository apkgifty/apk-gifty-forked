// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);

  let data = JSON.stringify({
    ...body,
    firstname: "john",
    lastname: "Piram",
    password_confirmation: body.password,
  });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://backend.apkxchange.com/api/register",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    console.log(response.data);

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
