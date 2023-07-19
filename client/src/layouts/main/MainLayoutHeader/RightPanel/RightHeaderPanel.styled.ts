import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import { NavigationMenu as NavigationMenuComponent } from '@components/navigation/NavigationMenu'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

// TODO: Loader
const SignoutButtonComponent = dynamic(
  import('@components/user/auth-control').then(mod => mod.SignoutButton),
  { ssr: false }
)

export const Root = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${maxDeviceWidth.tablet}) {
    width: 100%;
    justify-content: space-between;
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (${maxDeviceWidth.tablet}) {
    display: none;
  }
`

export const SignoutButton = styled(SignoutButtonComponent)`
  height: 42px;
  padding: 0 16px;

  span {
    font-size: 16px;
  }
`

export const NavigationMenu = styled(NavigationMenuComponent)`
  margin-left: auto;
`
