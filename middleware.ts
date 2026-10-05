import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Security middleware: per-IP rate limiting for write requests.
 * Headers are enforced in next.config.ts. This is a best-effort layer per
 * instance; put a WAF (Cloudflare) in front for production-grade limiting.
 */

const WINDOW_MS = 60_000;
const MAX_POSTS_PER_WINDOW = 12;
const buckets = new Map<string, { count: number; windowStart: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });
    return true;
  }
  bucket.count += 1;
  return bucket.count <= MAX_POSTS_PER_WINDOW;
}

export function middleware(request: NextRequest) {
  if (request.method === "POST") {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "local";

    if (!rateLimit(ip)) {
      return new NextResponse(
        JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
            "X-Content-Type-Options": "nosniff",
          },
        },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  // Everything except static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
