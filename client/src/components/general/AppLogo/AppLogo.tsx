import type { FC } from 'react'

import { Routes } from '@router/Routes.enum'
import { APP_TITLE } from '@constants/seo'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Logo from './AppLogo.styled'

export const AppLogo: FC<EmotionClassNameProps> = props => (
  <Logo.Root {...props}>
    <Logo.Link href={Routes.HOME}>
      <Logo.MockLogo />
    </Logo.Link>
    <Logo.TextContainer>
      <Logo.Title data-testid='title'>{APP_TITLE}</Logo.Title>
      <Logo.Slogan>самая вкусная еда во вселенной</Logo.Slogan>
    </Logo.TextContainer>
  </Logo.Root>
)
