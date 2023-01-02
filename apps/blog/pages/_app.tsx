import { darkTheme, lightTheme } from '@components/theme/theme';
import { CssBaseline, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        {CssBaseline.flush()}
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}
