import styled from '@emotion/styled'

import MainLayout from '@layouts/Main'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Layout = styled(MainLayout)`
  padding-bottom: 30px !important;

  @media (max-width: 1120px) {
    padding: 40px 0;
  }

  @media (${maxDeviceWidth.tablet}) {
    padding: 16px;
  }

  @media (max-width: 500px) {
    padding: 16px 6px;
  }
`
