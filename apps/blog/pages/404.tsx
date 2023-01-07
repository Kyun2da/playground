import { Layout } from '@layouts/Layout';
import { Col, Image, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const route = useRouter();

  console.log('route', route.pathname);

  return (
    <Layout>
      <Row justify="center" align="center">
        <Col css={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Text as="h3" css={{ display: 'flex', justifyContent: 'center' }}>
            페이지를 찾을 수 없습니다. 😢
          </Text>
          <Text as="h3" css={{ display: 'flex', justifyContent: 'center' }}>
            {route.pathname} 는 존재하지 않는 페이지입니다.
          </Text>
        </Col>
        <Image
          src="https://kyun2da-blog.s3.ap-northeast-2.amazonaws.com/404.png"
          height="400px"
          css={{ borderRadius: 8 }}
        />
      </Row>
    </Layout>
  );
}
