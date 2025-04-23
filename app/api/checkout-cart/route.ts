import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    // Parse the request body if it exists
    let body = {};
    try {
      body = await req.json();
    } catch (e) {
      // If there's no body or it's not valid JSON, continue with empty body
      console.log("No request body or invalid JSON");
    }

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${process.env.API_ENDPOINT}/process/cart`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: body, // Include the body in the request
    };

    const response = await axiosInstance(config);
    // console.log("Checkout cart response:", response);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Checkout Cart API Error:", {
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
