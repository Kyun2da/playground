import { Link, Navbar } from '@nextui-org/react';

const Links = [
  { name: 'Home', href: '/' },
  { name: 'Tags', href: '/tags' },
  { name: 'About', href: '/about' },
  { name: 'Feedback', href: '/feedback' },
];

export function HamburgerMenu() {
  return (
    <>
      <Navbar.Toggle aria-label="toggle navigation" />
      <Navbar.Collapse>
        {Links.map(({ name, href }) => (
          <Navbar.CollapseItem key={name}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={href}
            >
              {name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </>
  );
}
