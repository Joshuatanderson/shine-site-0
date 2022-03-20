import '../styles/globals.scss'
import "@fontsource/roboto";
import "@fontsource/bebas-neue";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
