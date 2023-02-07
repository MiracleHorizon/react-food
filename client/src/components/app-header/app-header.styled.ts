import styled from '@emotion/styled'

import { HorizontalDivider } from '@/styles/styled-components/divider'
import { FixedHeader } from '@/styles/styled-components/fixed-header'
import { colors } from '@/styles/variables'

export const appHeaderHeight = 80

export const Root = styled(FixedHeader)<RootProps>`
  width: 100%;
  height: ${appHeaderHeight}px;
  padding: 0 24px;
  background: ${colors.gray['2']};
  transition: box-shadow 0.2s ease-in-out;
  ${p =>
    !p.isPageScrollOnTop && 'box-shadow: 0 8px 20px rgb(117 115 111 / 20%)'};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Divider = styled(HorizontalDivider)`
  background: #8a878466;
`

interface RootProps {
  isPageScrollOnTop: boolean
}
