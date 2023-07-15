'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import Layout from './layout';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const pathName = usePathname();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <div>
        <div>
          <p>페이지를 찾을 수 없습니다. 😢</p>
          <p>{pathName} 는 존재하지 않는 페이지입니다.</p>
        </div>
        <img src="https://kyun2da-blog.s3.ap-northeast-2.amazonaws.com/404.png" height="400px" />
      </div>
    </Layout>
  );
}
