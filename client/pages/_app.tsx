import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import type { FC } from 'react'

import GlobalStyles from '@components/styles/GlobalStyles'

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => (
  <SessionProvider session={session}>
    <GlobalStyles />
    <Component {...pageProps} />
  </SessionProvider>
)

export default App
