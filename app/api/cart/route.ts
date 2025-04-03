// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";
import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { products } = body;

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${process.env.API_ENDPOINT}/cart`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: { products },
    };

    const response = await axiosInstance(config);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Cart API Error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: error.config,
    });

    // Return the actual error response from the server
    if (error.response?.data) {
      return new Response(JSON.stringify(error.response.data), {
        status: error.response.status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(
      JSON.stringify({
        error: error.message,
        details: error.response?.data,
      }),
      {
        status: error.response?.status || 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
// Get cart items
export async function GET(req: Request, res: Response) {
  console.log("entered");
  try {
    const response = await axiosInstance({
      method: "GET",
      url: `${process.env.API_ENDPOINT}/cart`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(response.data);

    // return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Cart API Error:", {
      message: error.message,
      response: error.response?.data,
    });
  }
}
