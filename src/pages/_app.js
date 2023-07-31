import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";
import store from '@/redux/store';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps: { session, ...pageProps } }
) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, [])

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ToastContainer position="bottom-right" />
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}
