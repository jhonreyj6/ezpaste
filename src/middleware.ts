import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // const authenticated = true;
  // if (authenticated) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/", "/login", "/register"],
// };
