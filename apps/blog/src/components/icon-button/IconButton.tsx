import { CSS, styled } from '@nextui-org/react';
import { ComponentProps, ReactNode } from 'react';

const StyledButton = styled('button', {
  flex: 'center',
  size: 'auto',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: 0,
  '& .theme-selector-icon': {
    color: '$colors$accents6',
  },
  '@xsMax': {
    px: '$2',
  },
  '&:hover path': {
    fill: 'grey',
  },
});

interface Props extends ComponentProps<typeof StyledButton> {
  css?: CSS;
  icon: ReactNode;
}

export function IconButton({ icon, ...props }: Props) {
  return <StyledButton {...props}>{icon}</StyledButton>;
}
