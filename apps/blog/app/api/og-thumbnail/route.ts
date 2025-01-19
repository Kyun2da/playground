import axios from 'axios';
import { load } from 'cheerio';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    // URL의 HTML 콘텐츠 가져오기
    const { data } = await axios.get(url, { timeout: 5000 });
    const $ = load(data);

    // Open Graph 태그 추출
    const ogTitle = $('meta[property="og:title"]').attr('content') || 'No Title';
    const ogDescription = $('meta[property="og:description"]').attr('content') || 'No Description';
    const ogImage = $('meta[property="og:image"]').attr('content') || '';

    return NextResponse.json({
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
    });
  } catch (error) {
    console.error('Error fetching Open Graph data:', error);
    return NextResponse.json({ error: 'Failed to fetch Open Graph data' }, { status: 500 });
  }
}
