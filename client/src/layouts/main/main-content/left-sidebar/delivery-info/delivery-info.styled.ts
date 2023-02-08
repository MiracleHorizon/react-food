import styled from '@emotion/styled'

import { colors } from '@styles/variables'
import { Title } from '../left-sidebar.styled'

export const textMarginY = 14

export const Root = styled.div`
  cursor: pointer;
  margin-bottom: 36px;
  padding-left: 10px;
  color: ${colors.black['1']};

  &:hover {
    div[data-el='delivery-about'] {
      color: ${colors.red['1']};

      svg {
        stroke: ${colors.red['1']};
      }

      path[data-el='svg-line'] {
        opacity: 1;
      }

      path[data-el='svg-tip'] {
        transform: translateX(6px);
      }
    }
  }
`

export const StyledTitle = styled(Title)`
  transition: opacity 0.3s ease-in-out;
`
