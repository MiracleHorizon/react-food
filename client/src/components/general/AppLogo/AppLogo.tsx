import type { FC } from 'react'

import { Routes } from '@router/Routes.enum'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Logo from './AppLogo.styled'

const AppLogo: FC<EmotionClassNameProps> = ({ className }) => (
  <Logo.Root className={className}>
    <Logo.Link href={Routes.HOME}>
      <Logo.MockLogo />
    </Logo.Link>
    <Logo.TextContainer>
      <Logo.Title>React.Еда</Logo.Title>
      <Logo.Slogan>самая вкусная еда во вселенной</Logo.Slogan>
    </Logo.TextContainer>
  </Logo.Root>
)

export default AppLogo
