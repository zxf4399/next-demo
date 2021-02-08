import { AppProps } from 'next/app';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';

import '../styles/globals.css';
import './index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/svg-components">svg-components</Link>
        <Link href="/with-next-sass">with-next-sass</Link>
        <Link href="/with-next-sitemap">with-next-sitemap</Link>
        <Link href="/with-tailwindcss">with-tailwindcss</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
