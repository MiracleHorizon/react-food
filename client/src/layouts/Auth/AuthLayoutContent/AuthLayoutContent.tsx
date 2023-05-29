import type { FC, PropsWithChildren } from 'react'

import * as Content from './AuthLayoutContent.styled'

const AuthLayoutContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Content.Root>
      <Content.CoverSection></Content.CoverSection>
      <Content.FormSection>{children}</Content.FormSection>
    </Content.Root>
  )
}

export default AuthLayoutContent
