import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';

export async function middleware(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: true, message: 'Unauthorized - No token found' },
        { status: 401 }
      );
    }

    const user = await verifyToken(token);

    if (!user) {
      return NextResponse.json(
        { error: true, message: 'Unauthorized - Invalid token' },
        { status: 401 }
      );
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-user-id', user.id as string);

    return NextResponse.next({ request: { headers: requestHeaders } });

  } catch (err) {
    console.error('[Middleware Error]', err);
    return NextResponse.json(
      { error: true, message: 'Unauthorized - Internal verification error' },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ['/api/admin/:path*'],
};
