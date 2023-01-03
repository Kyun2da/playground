import { IconButton } from '@components/icon-button/IconButton';
import { Container, Row, Text } from '@nextui-org/react';
import { GithubIcon } from 'public/assets/icon/GIthub';
import { LinkedInIcon } from 'public/assets/icon/LinkedIn';
import { MailIcon } from 'public/assets/icon/Mail';
import { RssIcon } from 'public/assets/icon/RssIcon';
import { TwitterIcon } from 'public/assets/icon/Twitter';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Container> {}

export function Footer(props: Props) {
  return (
    <Container display="flex" justify="center" {...props}>
      <Row justify="space-between">
        <Text>All rights reserved © Kyun2da 2022</Text>
        <Row justify="flex-end" css={{ width: 'fit-content', gap: 24 }}>
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
        </Row>
      </Row>
    </Container>
  );
}
