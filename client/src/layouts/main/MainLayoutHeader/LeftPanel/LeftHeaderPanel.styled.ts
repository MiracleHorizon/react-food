import styled from '@emotion/styled'

import { AppLogo } from '@components/general/AppLogo'
import { SearchWidget } from '@components/general/SearchWidget'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${maxDeviceWidth.tablet}) {
    flex: 1 1 auto;
  }
`

export const Logo = styled(AppLogo)`
  @media screen and (${maxDeviceWidth.tablet}) {
    display: none;
  }
`

export const Search = styled(SearchWidget)`
  margin-left: 24px;

  @media screen and (${maxDeviceWidth.tablet}) {
    width: 100%;
    max-width: 340px;
    margin-left: 0;
  }
`
