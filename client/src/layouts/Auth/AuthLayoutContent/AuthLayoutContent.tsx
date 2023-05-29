import type { FC } from 'react'

import type { ChildrenProps } from '@app-types/ChildrenProps'
import * as Content from './AuthLayoutContent.styled'

const AuthLayoutContent: FC<ChildrenProps> = ({ children }) => {
  return (
    <Content.Root>
      <Content.CoverSection></Content.CoverSection>
      <Content.FormSection>{children}</Content.FormSection>
    </Content.Root>
  )
}

export default AuthLayoutContent
