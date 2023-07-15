import Giscus from '@giscus/react';
import { Layout } from 'layouts/Layout';

export function Feedback() {
  // const { isDark } = useTheme();
  const isDark = false;

  return (
    <Layout title="Feedback">
      <div>
        <p>안녕하세요! 👋</p>
        <p>Kyun2da Blog에 오신것을 환영합니다.😊</p>
      </div>
      <Giscus
        id="comments"
        repo="kyun2da/playground"
        repoId="R_kgDOHbjrmw"
        category="General"
        categoryId="DIC_kwDOHbjrm84CRXte"
        mapping="pathname"
        reactionsEnabled="1"
        inputPosition="top"
        emitMetadata="0"
        lang="ko"
        theme={isDark ? 'dark' : 'light'}
      />
    </Layout>
  );
}
