import { Layout } from '@layouts/Layout';
import { useRouter } from 'next/router';

export default function Custom404() {
  const route = useRouter();

  console.log('route', route.pathname);

  return (
    <Layout>
      <div>
        <div>
          <p>페이지를 찾을 수 없습니다. 😢</p>
          <p>{route.pathname} 는 존재하지 않는 페이지입니다.</p>
        </div>
        <img src="https://kyun2da-blog.s3.ap-northeast-2.amazonaws.com/404.png" height="400px" />
      </div>
    </Layout>
  );
}
