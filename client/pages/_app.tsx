import type { AppProps } from 'next/app'
import type { FC } from 'react'

import GlobalStyles from '@components/styles/GlobalStyles'
import { useRefreshAuth } from '@hooks/useRefreshAuth'

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  useRefreshAuth()

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
