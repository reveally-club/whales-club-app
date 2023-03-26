import Head from "next/head";
import { Public_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "@/styles/globals.scss";

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window != undefined) {
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <title>whales.club | 웨일즈.클럽</title>
        <meta name="description" content="whales.club | 웨일즈.클럽" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whales.reveally.club" />
        <meta property="og:title" content="whales.club | 웨일즈.클럽" />
        <meta
          property="og:image"
          content="https://whales.reveally.club/og.png"
        />
        <meta
          property="og:description"
          content="Wallet tracking and onchain data visualization solution, Whales.club"
        />
        <meta property="og:site_name" content="whales.reveally.club" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="whales.club | 웨일즈.클럽" />
        <meta name="twitter:title" content="whales.club | 웨일즈.클럽" />
        <meta
          name="twitter:description"
          content="Wallet tracking and onchain data visualization solution, Whales.club"
        />
        <meta name="twitter:url" content="https://whales.reveally.club" />
      </Head>
      <main className={publicSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
