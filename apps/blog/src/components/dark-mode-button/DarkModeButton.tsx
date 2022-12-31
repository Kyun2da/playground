import { CSS, styled, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Moon } from 'public/assets/icon/Moon';
import { Sun } from 'public/assets/icon/Sun';

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
});

interface Props {
  css?: CSS;
}

export function DarkModeButton({ css }: Props) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <StyledButton
      css={css}
      aria-label="toggle a light and dark color scheme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Moon size={24} /> : <Sun size={24} />}
    </StyledButton>
  );
}
