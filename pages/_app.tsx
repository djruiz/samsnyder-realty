import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { ScriptContextProvider } from 'contexts/script-context'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement('script');
      script.type = "text/javascript";
      script.src = "//code.tidio.co/hdwlba6dcvr0ynexid5neye6ltmsqp6c.js";
      script.async = true;
      document.getElementsByTagName('head')[0].appendChild(script);
    }, 1000)
  }, [])

  return <ScriptContextProvider><Component {...pageProps} /></ScriptContextProvider>
}

export default MyApp
