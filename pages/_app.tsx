import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';

import ClippedDrawer from 'components/common/ClippedDrawer';
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
        <ClippedDrawer>
          <Component {...pageProps} />
        </ClippedDrawer>
      </ThemeProvider>
    </>
  );
}
