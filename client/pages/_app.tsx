import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import type { FC } from 'react'

import GlobalStyles from '@components/styles/GlobalStyles'

const queryClient = new QueryClient()

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => (
  <QueryClientProvider client={queryClient}>
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  </QueryClientProvider>
)

export default App
