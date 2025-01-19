'use client';

import { useState, useEffect } from 'react';

interface OgData {
  title: string;
  image: string;
  error?: string;
}

interface LinkPreviewProps {
  url: string;
}

export default function LinkPreview({ url }: LinkPreviewProps) {
  const [data, setData] = useState<OgData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOgData = async () => {
      try {
        const response = await fetch(`/api/og-thumbnail?url=${encodeURIComponent(url)}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching Open Graph data:', error);
        setData({ title: '', image: '', error: 'Failed to fetch data' });
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchOgData();
    }
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (data?.error) return <p>Error: {data.error}</p>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none', // 기본 밑줄 제거
        border: '1px solid #ddd',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Hover 애니메이션
      }}
      onMouseOver={e => (
        (e.currentTarget.style.transform = 'translateY(-4px)'),
        (e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)')
      )}
      onMouseOut={e => (
        (e.currentTarget.style.transform = 'translateY(0)'),
        (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)')
      )}
    >
      {/* 이미지 */}
      {data?.image && (
        <img
          src={data.image}
          alt={data.title}
          style={{
            width: '100%',
            height: '240px',
            objectFit: 'cover',
            marginTop: 0,
            marginBottom: '0px',
          }}
        />
      )}
      {/* 텍스트 영역 */}
      <div style={{ padding: '0 16px 16px 16px' }}>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#333',
            display: '-webkit-box',
            WebkitLineClamp: 2, // 최대 2줄로 제한
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={data?.title}
        >
          {data?.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: '#007bff',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            margin: 0,
          }}
          title={url}
        >
          {url}
        </p>
      </div>
    </a>
  );
}
