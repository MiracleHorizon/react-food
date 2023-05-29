import styled from '@emotion/styled'

import { HorizontalDivider } from '@styles/styled-components/Divider'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  @media (${maxDeviceWidth.mobileLg}) {
    margin-top: 12px;
  }
`

export const Divider = styled(HorizontalDivider)`
  margin: 32px 0;

  @media (${maxDeviceWidth.tablet}) {
    margin: 28px 0;
  }

  @media (max-width: 650px) {
    margin: 24px 0;
  }

  @media (max-width: 500px) {
    margin: 20px 0;
  }

  @media (${maxDeviceWidth.mobileMd}) {
    margin: 16px 0;
  }
`
