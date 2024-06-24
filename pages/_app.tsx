import React from "react";
import '../pages/globals.css';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;