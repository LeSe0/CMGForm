// types
import type { AppProps } from "next/app";

// styles
import "../styles/globals.css";

// Components
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CMG</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
