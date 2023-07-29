// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.formData();
  console.log(body);

  let data = JSON.stringify({
    firstname: body.get("firstname"),
    lastname: body.get("lastname"),
    email: body.get("email"),
    password: body.get("password"),
    confirm_password: body.get("password_confirmation"),
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

    return new Response(response.data, {
      status: 201,
      headers: {
        "content-type": "application/json",
      },
    });

    // return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
  }
}
