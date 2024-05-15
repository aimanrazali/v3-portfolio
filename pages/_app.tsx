import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Component {...pageProps} />
      ) : (
        <h1>Prerendered content here...</h1>
      )}
    </>
  );
}
