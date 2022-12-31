import { Post } from '@interfaces/Post';
import { OmitPropsOf } from '@lib/type';
import { Card, Row, Text } from '@nextui-org/react';
import Link from 'next/link';

import { CategoryBadge } from './CategoryBadge';

interface Props extends OmitPropsOf<typeof Card, 'children'> {
  post: Post;
}

export function ContentCard({ post, ...props }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card isHoverable isPressable {...props}>
        <Row>
          <Card.Image src={post.coverImage} objectFit="cover" width="30%" alt={post.title} />
          <Card.Body style={{ padding: '12px 24px', display: 'flex', alignSelf: 'stretch' }}>
            <Text h2>{post.title}</Text>
            <Text>{post.excerpt}</Text>
            {post.categories.map(category => {
              return (
                <CategoryBadge key={category} size="xs">
                  {category}
                </CategoryBadge>
              );
            })}
            <Row justify="space-between" css={{ marginTop: 'auto' }}>
              <Text css={{ marginRight: 12 }}>{post.date}</Text>
              <Text>읽는데 {post.time}분</Text>
            </Row>
          </Card.Body>
        </Row>
      </Card>
    </Link>
  );
}
