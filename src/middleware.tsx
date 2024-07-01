import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl.clone();

  if (pathname.startsWith("/api-softeer")) {
    const apiUrl = new URL(
      process.env.SOFTEER_FO_URL || "https://developers.hyundaimotorgroup.com"
    );
    apiUrl.pathname = pathname.replace("/api-softeer", "/api");
    apiUrl.search = searchParams.toString();

    try {
      const apiResponse = await fetch(apiUrl.toString());
      const data = await apiResponse.text();

      return new Response(data, {
        status: apiResponse.status,
        headers: apiResponse.headers,
      });
    } catch (error) {
      return new Response("API request failed", { status: 502 });
    }
  }

  return NextResponse.next();
}
