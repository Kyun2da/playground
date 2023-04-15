import { Navbar } from '@nextui-org/react';
import { useRouter } from 'next/router';

export function Category() {
  const router = useRouter();

  return (
    <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline-rounded">
      <Navbar.Link href="/" isActive={router.asPath === '/'}>
        Home
      </Navbar.Link>
      <Navbar.Link href="/tags" isActive={router.asPath === '/tags'}>
        Tags
      </Navbar.Link>
      <Navbar.Link href="/about" isActive={router.asPath === '/about'}>
        About
      </Navbar.Link>
      <Navbar.Link href="/feedback" isActive={router.asPath === '/feedback'}>
        Feedback
      </Navbar.Link>
    </Navbar.Content>
  );
}
