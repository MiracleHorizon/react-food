import styled from '@emotion/styled'

import { colors } from '@styles/colors'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 14px;
    color: ${colors.gray['8']};
  }

  div {
    max-width: 220px;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    flex-direction: column;

    div:first-of-type {
      margin-bottom: 8px;
    }
  }

  @media (${maxDeviceWidth.mobileLg}) {
    span {
      font-size: 13px;
    }

    div:first-of-type {
      margin-bottom: 6px;
    }
  }
`
