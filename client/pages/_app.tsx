import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import GlobalStyles from '@components/GlobalStyles'

export const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Component {...pageProps} />
  </QueryClientProvider>
)

export default App
