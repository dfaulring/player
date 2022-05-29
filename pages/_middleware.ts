import { NextRequest, NextResponse } from 'next/server';

const signedinPages = ['/', '/playlist', '/library'];

export default function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies['PLAYER_ACCESS_TOKEN'];

    if (!token) {
      let url = req.nextUrl.clone();
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }
  }
}
