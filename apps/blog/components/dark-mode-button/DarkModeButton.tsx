import { Button } from '@nextui-org/button';
import { useTheme } from 'next-themes';
import { Moon } from 'public/assets/icon/Moon';
import { Sun } from 'public/assets/icon/Sun';

// const StyledButton = styled('button', {
//   flex: 'center',
//   size: 'auto',
//   cursor: 'pointer',
//   background: 'transparent',
//   border: 'none',
//   padding: 0,
//   '& .theme-selector-icon': {
//     color: '$colors$accents6',
//   },
//   '@xsMax': {
//     px: '$2',
//   },
// });

// interface Props {
//   // css?: CSS;
// }

export function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      aria-label="toggle a light and dark color scheme"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
    </Button>
  );
}
