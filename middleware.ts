import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import axios from "axios";

import { getProfile } from "./utils/helpers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let token = request.cookies.get("access");

  const { url, nextUrl } = request;
  const { host, hostname, protocol } = nextUrl;

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/profile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token?.value}` },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    const userData = await response.json();

    if (userData.data.email_verified_at === null) {
      return NextResponse.redirect(`${protocol}//${host}/email-verification`);
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    // You might want to handle the error by redirecting to an error page or login page
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/kyc", "/dashboard/:path*"],
};
