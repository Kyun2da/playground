import { darkTheme, lightTheme } from '@components/theme/theme';
import { NextUIProvider } from '@nextui-org/react';
import { Analytics } from '@vercel/analytics/react';
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
        <Component {...pageProps} />
        <Analytics />
      </NextUIProvider>
    </ThemeProvider>
  );
}
