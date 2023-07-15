import { useDarkMode } from 'hooks/useDarkMode';
import { Moon } from 'public/assets/icon/Moon';
import { Sun } from 'public/assets/icon/Sun';

import { Button } from '@/components/ui/button';

export function DarkModeButton() {
  const { isDarkMode, setTheme } = useDarkMode();

  return (
    <Button
      aria-label="toggle a light and dark color scheme"
      onClick={() => {
        setTheme(isDarkMode ? 'light' : 'dark');
      }}
    >
      {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
    </Button>
  );
}
