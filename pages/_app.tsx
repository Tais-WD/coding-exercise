import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets:["latin"],
  weight: ['400', '500'],
  });

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
         
      </>
    );
  }
  
export default MyApp;