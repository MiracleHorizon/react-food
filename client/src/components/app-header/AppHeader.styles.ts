import styled from '@emotion/styled'

import { FixedHeader } from '@/public/styles/FixedHeader'
import { colors } from '@/public/styles/variables'

export const APP_HEADER_HEIGHT = 80

export const Root = styled(FixedHeader)<RootProps>`
  width: 100%;
  height: ${APP_HEADER_HEIGHT}px;
  padding: 0 24px;
  background: ${colors.gray4};
  transition: box-shadow 0.2s ease-in-out;
  ${p => !p.isScrollOnTop && 'box-shadow: 0 8px 20px rgb(117 115 111 / 20%)'};

  div[data-el='header-content'] {
    ${p => p.isScrollOnTop && 'margin-bottom: 1px solid #8a878466'};
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface RootProps {
  isScrollOnTop: boolean
}
