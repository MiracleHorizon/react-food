import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@styles/colors'

export const Root = styled.div<RootProps>`
  cursor: ${p => (p.withClickAction ? 'pointer' : 'default')};
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${colors.gray['6']};
`

export const Image = styled(NextImage)`
  padding: 6px;
`

interface RootProps {
  withClickAction: boolean
}
