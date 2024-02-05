import type { AppProps } from 'next/app'
import {Roboto} from "next/font/google";

 
const roboto = Roboto({
subsets:["latin"],
weight: ['400', '700'],
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <main  className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </>
    );
  }
  
export default MyApp;