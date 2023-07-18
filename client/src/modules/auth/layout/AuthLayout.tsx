import { useRouter } from 'next/router'
import type { FC, PropsWithChildren } from 'react'

import { Head } from '@components/seo/Head'
import { AuthHero } from '../components/AuthHero'
import { AuthSuggestion } from '../components/AuthSuggestion'
import { getAuthPageTitle } from '../helpers/getAuthPageTitle'
import type { Routes } from '@router/Routes.enum'
import * as Layout from './AuthLayout.styled'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const { asPath } = useRouter()

  return (
    <>
      <Head title={getAuthPageTitle(asPath as Routes)} />
      <Layout.Root>
        <Layout.Content>
          <AuthHero />
          {children}
          <AuthSuggestion />
        </Layout.Content>
      </Layout.Root>
    </>
  )
}

export default AuthLayout
