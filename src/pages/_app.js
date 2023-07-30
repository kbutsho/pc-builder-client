import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }
) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, [])

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
