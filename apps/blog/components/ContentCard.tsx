import { Card, CardBody } from '@nextui-org/card';
import { format, parse } from 'date-fns';
import { useLayout } from 'hooks/useMedia';
import { Post } from 'interfaces/Post';
import Link from 'next/link';
import { OmitPropsOf } from 'utils/type';

import { CategoryBadge } from './CategoryBadge';

interface Props extends OmitPropsOf<typeof Card, 'children'> {
  post: Post;
}

export function ContentCard({ post, ...props }: Props) {
  const layout = useLayout();

  if (layout === 'mobile') {
    return (
      <Link href={`/posts/${post.slug}`}>
        <Card isHoverable isPressable {...props}>
          <div>
            <img src={post.coverImage} width={200} height={160} alt={post.title} />
            <CardBody style={{ padding: '6px 12px', display: 'flex', alignSelf: 'stretch' }}>
              <p>{post.title}</p>
              <p>{post.excerpt}</p>
              <div>
                <div>
                  <p>{format(parse(post.date, 'yyyy-mm-dd', new Date()), 'yyyy - mm - dd')}</p>
                  <p>읽는데 {post.time}분</p>
                </div>
              </div>
            </CardBody>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/posts/${post.slug}`}>
      <Card isHoverable isPressable {...props}>
        <div>
          <img src={post.coverImage} width="30%" height="210px" alt={post.title} />
          <CardBody style={{ padding: '12px 24px', display: 'flex', alignSelf: 'stretch' }}>
            <p>{post.title}</p>
            <p>{post.excerpt}</p>
            <div>
              {post.categories.map(category => {
                return (
                  <CategoryBadge key={category} size="xs">
                    {category}
                  </CategoryBadge>
                );
              })}
              <div>
                <p>{format(parse(post.date, 'yyyy-mm-dd', new Date()), 'yyyy - mm - dd')}</p>
                <p>읽는데 {post.time}분</p>
              </div>
            </div>
          </CardBody>
        </div>
      </Card>
    </Link>
  );
}
