import { IconButton } from '@components/icon-button/IconButton';
import { GithubIcon } from 'public/assets/icon/GIthub';
import { LinkedInIcon } from 'public/assets/icon/LinkedIn';
import { MailIcon } from 'public/assets/icon/Mail';
import { RssIcon } from 'public/assets/icon/RssIcon';
import { TwitterIcon } from 'public/assets/icon/Twitter';
import { ReactNode } from 'react';
import { useLayout } from 'src/hooks/useMedia';

// interface Props {}

export function Footer() {
  return (
    <Layout>
      <p>All rights reserved © Kyun2da {new Date().getFullYear()}</p>
      <div>
        <IconButton
          icon={<GithubIcon />}
          onClick={() => {
            window.open('https://github.com/kyun2da');
          }}
        />
        <IconButton
          icon={<TwitterIcon />}
          onClick={() => {
            window.open('https://twitter.com/kyun2da');
          }}
        />
        <IconButton
          icon={<MailIcon />}
          onClick={() => {
            window.open('mailto:kyun2dot@gmail.com');
          }}
        />
        <IconButton
          icon={<LinkedInIcon />}
          onClick={() => {
            window.open('https://www.linkedin.com/in/%EA%B7%A0-%ED%97%88-5217691b9/');
          }}
        />
        <IconButton
          icon={<RssIcon />}
          onClick={() => {
            window.open('https://www.kyun2da.dev/sitemap.xml');
          }}
        />
      </div>
    </Layout>
  );
}

function Layout({ children }: { children: ReactNode }) {
  const layout = useLayout();

  if (layout === 'mobile') {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          maxWidth: 768,
          marginTop: 36,
          marginBottom: 24,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
    // css={{
    //   maxWidth: 768,
    //   marginTop: 72,
    //   marginBottom: 48,
    // }}
    >
      <div>{children}</div>
    </div>
  );
}
