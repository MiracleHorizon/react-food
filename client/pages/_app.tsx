import { AppProps } from 'next/app'

import GlobalStyles from '@/components/GlobalStyles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
