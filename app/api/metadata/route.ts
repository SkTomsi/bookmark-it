import { NextResponse } from 'next/server';
import { unfurl } from 'unfurl.js';

export async function POST(req: Request) {
  const { url } = await req.json();

  const data = await unfurl(url);

  console.log(data);

  return NextResponse.json(data);
}
