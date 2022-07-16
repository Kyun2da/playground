import { Link, Row, Spacer } from '@nextui-org/react';
import cn from 'classnames';
import { includes } from 'lodash';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export function Category() {
  const router = useRouter();

  return (
    <Row justify="center" align="center" fluid={false}>
      <NextLink href="/tags">
        <Link
          aria-disabled
          className={cn('navbar__link', {
            active: includes(router.asPath, 'tags'),
          })}
          title="tags"
          css={{
            color: '$text',
            '&.active': {
              fontWeight: '600',
              color: '$primary',
            },
          }}
        >
          Tags
        </Link>
      </NextLink>
      <Spacer x={1} y={0} />
      <NextLink href="/about">
        <Link
          aria-disabled
          className={cn('navbar__link', {
            active: includes(router.asPath, 'about'),
          })}
          title="about"
          css={{
            color: '$text',
            '&.active': {
              fontWeight: '600',
              color: '$primary',
            },
          }}
        >
          About
        </Link>
      </NextLink>
      <Spacer x={1} y={0} />
      <NextLink href="/feedback">
        <Link
          aria-disabled
          className={cn('navbar__link', {
            active: includes(router.asPath, 'feedback'),
          })}
          title="feedback"
          css={{
            color: '$text',
            '&.active': {
              fontWeight: '600',
              color: '$primary',
            },
          }}
        >
          Feedback
        </Link>
      </NextLink>
    </Row>
  );
}
