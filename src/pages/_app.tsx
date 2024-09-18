// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css'; // Import your global styles here
<link rel="icon" href="/Revyfest_logo.png" sizes="any" />
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
