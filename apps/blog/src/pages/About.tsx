import { Layout } from '@layouts/Layout';
import { Avatar, Card, Col, Grid, Row, Text } from '@nextui-org/react';

export function About() {
  return (
    <Layout title="About">
      <Row css={{ marginTop: 48 }}>
        <Avatar src="https://avatars.githubusercontent.com/u/50328132?v=4" css={{ size: '$40' }} />
        <Col css={{ width: 'fit-content', marginLeft: 24 }}>
          <Text as="h1">허균</Text>
          <Text as="h3">Frontend Developer</Text>
        </Col>
      </Row>
      <Grid.Container gap={2} css={{ height: 'fit-content' }}>
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={208}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer>
                <Row
                  wrap="wrap"
                  justify={item.isConstruct ? 'space-between' : 'center'}
                  align="center"
                >
                  <Text b>{item.title}</Text>
                  {item.isConstruct ? (
                    <Text b color="warning">
                      공사중
                    </Text>
                  ) : null}
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
}

const list = [
  {
    title: 'Tools',
    img: 'assets/blog/tools.png',
    isConstruct: true,
  },
  {
    title: '기술 스택',
    img: 'assets/blog/tools.png',
    isConstruct: true,
  },
  {
    title: 'Archive',
    img: 'assets/blog/tools.png',
    isConstruct: true,
  },
];
