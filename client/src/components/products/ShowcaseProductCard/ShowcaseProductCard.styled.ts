import styled from '@emotion/styled'

import {
  type IShowcaseProductCardVariant,
  ShowcaseProductCardVariant
} from './ShowcaseProductCard.types'

export const Root = styled.div<IShowcaseProductCardVariant>`
  width: ${p => (p.variant === ShowcaseProductCardVariant.SMALL ? 172 : 224)}px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 24px;
  background: white;
  transition: background 100ms ease-in;
`
