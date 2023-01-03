import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '5px 40px',
            width: 'auto',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Kyun2da.dev
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
