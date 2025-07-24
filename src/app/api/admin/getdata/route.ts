import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ error: false, message: 'Got data' }, { status: 200 });
}
