import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    // "/", "/devblog"
  ],
};

export default function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }

  req.nextUrl.pathname = "/api/basicauth";

  return NextResponse.rewrite(url);
}
