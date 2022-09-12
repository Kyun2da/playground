import { Post } from '@interfaces/Post';
import { Card, Col, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

import { CategoryBadge } from './CategoryBadge';

interface Props extends ComponentProps<typeof Card> {
  post: Post;
}

export function ContentCard({ post, ...props }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card hoverable clickable {...props}>
        <Row>
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#f1f3f5',
              marginRight: 12,
            }}
          >
            <Image
              src={post.coverImage}
              objectFit="scale-down"
              width={200}
              height={200}
              alt={post.title}
            />
          </div>
          <Col>
            <Text h2>{post.title}</Text>
            {post.categories.map(category => {
              return (
                <CategoryBadge key={category} size="xs">
                  {category}
                </CategoryBadge>
              );
            })}
            <Text>{post.excerpt}</Text>
            <Row gap={1} css={{ justifyContent: 'flex-end' }}>
              <Text>{post.date}</Text>
              <Text>읽는데 {post.time}분</Text>
            </Row>
          </Col>
        </Row>
      </Card>
    </Link>
  );
}
