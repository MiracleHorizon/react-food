import styled from '@emotion/styled'

import { Title as SidebarTitle } from '../LeftSidebar.styled'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Title = styled(SidebarTitle)`
  margin-left: 10px;

  @media screen and (${maxDeviceWidth.laptop}) {
    display: none;
  }
`
