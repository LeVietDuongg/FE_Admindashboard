import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, sourceLang, targetLang } = await req.json();
    // Placeholder translation. In production, call a real translate API.
    const translated = typeof text === 'string'
      ? `[${(sourceLang || 'auto').toUpperCase()}→${(targetLang || 'EN').toUpperCase()}] ${text}`
      : '';
    return NextResponse.json({ text: translated });
  } catch (e) {
    return NextResponse.json({ text: '' }, { status: 400 });
  }
}


