import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const hasImageUrl = searchParams.has('imageUrl');
    const title = searchParams.get('title')?.slice(0, 100) || 'Default Title';
    const imageUrl = hasImageUrl
      ? searchParams.get('imageUrl')
      : new URL('/img/redpanda.png', request.url).toString();

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #ffffff)',
            fontFamily: '"Noto Sans KR", Arial, sans-serif',
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                marginLeft: 8,
                fontSize: 64,
                fontWeight: 700,
              }}
            >
              Kyun2da.dev
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              left: 48,
              top: 240,
              maxWidth: 640,
              wordBreak: 'keep-all',
              gap: 24,
            }}
          >
            {hasTitle ? <span style={{ fontSize: 58 }}>{title}</span> : null}
          </div>
          <div style={{ display: 'flex', position: 'absolute', right: 48 }}>
            <img
              src={imageUrl as string}
              width="360"
              height="360"
              style={{ borderRadius: 32 }}
              onError={e => (e.currentTarget.src = 'https://via.placeholder.com/360')}
            />
          </div>

          <div style={{ display: 'flex', position: 'absolute', left: 42, bottom: 42 }}>
            <img
              src="https://avatars.githubusercontent.com/u/50328132?v=4"
              width="120"
              height="120"
              style={{ borderRadius: '50%' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                left: 148,
                bottom: 4,
                fontSize: 32,
              }}
            >
              <span>허균</span>
              <span>Developer</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error('Error generating Open Graph image:', e.message);
    return new Response(JSON.stringify({ error: 'Failed to generate the image' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
