import '../styles/globals.scss'
import "@fontsource/roboto";
import "@fontsource/bebas-neue";

import type { AppProps } from 'next/app'
import {Header} from '../components/Header';
import { ThemeProvider } from '@mui/system';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}

export default MyApp;
