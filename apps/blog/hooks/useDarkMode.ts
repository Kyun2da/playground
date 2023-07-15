import { useTheme } from 'next-themes';

export function useDarkMode() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';
  const isLightMode = theme === 'light';

  const setDarkMode = () => {
    setTheme('dark');
  };
  const setLightMode = () => {
    setTheme('light');
  };

  return {
    setTheme,
    isDarkMode,
    isLightMode,
    setDarkMode,
    setLightMode,
  };
}
