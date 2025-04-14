import { NextResponse } from "next/server";

import axiosInstance from "@/utils/axios";

export async function GET(req: Request, res: Response) {
  try {
    const response = await axiosInstance({
      method: "GET",
      url: `${process.env.API_ENDPOINT}/recent-trades`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // console.log("trades data received:", response.data);

    // Return the cart data
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Cart API Error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });

    // Return a proper error response
    return new Response(
      JSON.stringify({
        error: "Failed to fetch cart data",
        details: error.response?.data || error.message,
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
