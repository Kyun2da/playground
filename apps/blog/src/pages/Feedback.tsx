import Giscus from '@giscus/react';
import { Layout } from '@layouts/Layout';
import { Col, Text, useTheme } from '@nextui-org/react';

export function Feedback() {
  const { isDark } = useTheme();

  return (
    <Layout title="Feedback">
      <Col css={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 12 }}>
        <Text size="$3xl">안녕하세요! 👋</Text>
        <Text size="$3xl">Kyun2da Blog에 오신것을 환영합니다.😊</Text>
      </Col>
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
