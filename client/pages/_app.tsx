import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import GlobalStyles from '@/components/GlobalStyles'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Component {...pageProps} />
  </QueryClientProvider>
)

export default App
