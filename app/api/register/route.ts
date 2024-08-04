// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  // console.log(body);

  let { country } = body;

  country = country.split("-")[0];

  let data = JSON.stringify({
    ...body,
    lastname: "",
    country_name: country,
    password_confirmation: body.password,
  });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `${process.env.API_ENDPOINT}/register`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log("from register:", error.requst);
    const errorResponse = error.response?.data || {
      message: "Unknown error occurred",
    };
    const statusCode = error.response?.status || 500;

    return new Response(JSON.stringify(errorResponse), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    });
  }
}
