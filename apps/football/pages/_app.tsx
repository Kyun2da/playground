import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [a, setA] = useState(0);

  return <Component {...pageProps} />;
}
