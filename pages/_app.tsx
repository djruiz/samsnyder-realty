import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { ScriptContextProvider } from 'contexts/script-context'

function MyApp({ Component, pageProps }: AppProps) {
  return <ScriptContextProvider><Component {...pageProps} /></ScriptContextProvider>
}

export default MyApp
