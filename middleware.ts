import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedPages = ["/", "/playlist", "/library"]

export function middleware(req: NextRequest) {
  if (protectedPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.get("spotify_clone_token")

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }
}
