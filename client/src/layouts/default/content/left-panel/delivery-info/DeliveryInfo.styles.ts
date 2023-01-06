import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'
import { Title as RootTitle } from '../DefaultLayoutLeftPanel.styles'

export const Root = styled.div`
  cursor: pointer;
  margin-bottom: 36px;
  padding-left: 10px;
  color: ${colors.black1};

  &:hover {
    h4 {
      opacity: 0.65;
    }

    div[data-el='delivery-about'] {
      color: ${colors.red3};

      svg {
        stroke: ${colors.red3};
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

export const Title = styled(RootTitle)`
  transition: opacity 0.3s ease-in-out;
`
