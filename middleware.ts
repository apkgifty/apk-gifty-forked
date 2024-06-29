import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import axios from "axios";

import { getProfile } from "./utils/helpers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let token = request.cookies.get("access");

  const { url, nextUrl } = request;
  const { host, hostname, protocol } = nextUrl;

  const response = await fetch("https://backend.apkxchange.com/api/profile", {
    method: "GET",
    headers: { Authorization: `Bearer ${token?.value}` },
  });
  // const userData = await response.json();

  // if (userData.data.email_verified_at === null) {
  //   return NextResponse.redirect(`${protocol}//${host}/email-verification`);
  // }

  // if (!token) {
  //   const loginUrl = new URL("/login", request.url);
  //   return NextResponse.redirect(loginUrl);
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
