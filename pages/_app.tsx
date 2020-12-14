import { AppProps } from 'next/app';
import React from 'react';

import './index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
