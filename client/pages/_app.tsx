import type { AppProps } from 'next/app'
import type { FC } from 'react'

import { GlobalStyles } from '@components/styles/GlobalStyles'
import { useRefreshUser } from '@hooks/useRefreshUser'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useRefreshUser()

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
