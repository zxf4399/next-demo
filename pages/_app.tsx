import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Link from 'next/link';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';

import SEO from 'next-seo.config';
import 'scripts/wdyr';
import theme from 'theme';

import '../styles/globals.css';
import './index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <nav>
          <Link href="/svg-components">svg-components</Link>
          <Link href="/with-next-sass">with-next-sass</Link>
          <Link href="/with-next-sitemap">with-next-sitemap</Link>
          <Link href="/with-tailwindcss">with-tailwindcss</Link>
        </nav>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
