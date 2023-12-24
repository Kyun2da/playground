import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const hasDescription = searchParams.has('description');
    const hasImageUrl = searchParams.has('imageUrl');
    const title = searchParams.get('title')?.slice(0, 100);
    const imageUrl = hasImageUrl
      ? searchParams.get('imageUrl')
      : 'https://kyun2da-blog.s3.ap-northeast-2.amazonaws.com/redpanda.png';
    const description = searchParams.get('description')?.slice(0, 300);

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '-.02em',
            backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #ffffff)',
            fontFamily: 'Noto Sans KR',
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
                fontSize: !hasTitle && !hasDescription ? 60 : 20,
                fontWeight: 700,
              }}
            >
              Kyun2da.dev
            </span>
          </div>
          <div style={{ display: 'flex', position: 'absolute', left: 42, bottom: 42 }}>
            <img
              src="https://avatars.githubusercontent.com/u/50328132?v=4"
              width="80"
              height="80"
              style={{ borderRadius: '50%' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                left: 100,
                bottom: 4,
              }}
            >
              <span>허균</span>
              <span>Frontend Developer</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', left: 48 }}>
            {hasTitle ? <span style={{ fontSize: 32 }}>{title}</span> : null}
            {hasDescription ? <span>{description}</span> : null}
          </div>
          <div style={{ display: 'flex', position: 'absolute', right: 48 }}>
            <img src={imageUrl as string} width="160" height="280" style={{ borderRadius: 4 }} />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}