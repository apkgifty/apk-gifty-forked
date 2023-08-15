import { NextResponse } from "next/server";
import axiosInstance from "@/utils/axios";

export async function GET(req: Request, res: Response) {
  const { id } = await req.json();
  const config = {
    maxBodyLength: Infinity,
    url: `/history/order/${id}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    const response = await axiosInstance(config);
    console.log(response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
  }
}
