import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
