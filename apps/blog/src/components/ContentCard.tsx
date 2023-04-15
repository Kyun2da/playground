import { Post } from '@interfaces/Post';
import { Card, Col, Row, Text } from '@nextui-org/react';
import { format, parse } from 'date-fns';
import Link from 'next/link';
import { OmitPropsOf } from 'src/utils/type';

import { CategoryBadge } from './CategoryBadge';

interface Props extends OmitPropsOf<typeof Card, 'children'> {
  post: Post;
}

export function ContentCard({ post, ...props }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card
        isHoverable
        isPressable
        css={{ margin: '0 auto', marginTop: 32, maxWidth: 724, height: 204 }}
        {...props}
      >
        <Row>
          <Card.Image
            src={post.coverImage}
            objectFit="cover"
            width="30%"
            height="210px"
            alt={post.title}
          />
          <Card.Body style={{ padding: '12px 24px', display: 'flex', alignSelf: 'stretch' }}>
            <Text size="$3xl" weight={'bold'}>
              {post.title}
            </Text>
            <Text size="$sm">{post.excerpt}</Text>
            <Col css={{ marginTop: 'auto' }}>
              {post.categories.map(category => {
                return (
                  <CategoryBadge key={category} size="xs">
                    {category}
                  </CategoryBadge>
                );
              })}
              <Row justify="space-between">
                <Text css={{ marginRight: 12 }}>
                  {format(parse(post.date, 'yyyy-mm-dd', new Date()), 'yyyy - mm - dd')}
                </Text>
                <Text>읽는데 {post.time}분</Text>
              </Row>
            </Col>
          </Card.Body>
        </Row>
      </Card>
    </Link>
  );
}
