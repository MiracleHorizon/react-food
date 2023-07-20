import styled from '@emotion/styled'

import { UserOptionsList } from '@components/user/UserOptionsList'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { truncateText } from '@styles/truncateText'

export const Root = styled.div`
  position: relative;
  z-index: 100;
`

export const Panel = styled.div`
  position: fixed;
  right: 12px;
  top: 12px;
  max-height: 450px;
  width: 400px;
  padding: 20px;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
  background: white;

  @media (max-width: 600px) {
    width: 350px;
    right: 50%;
    left: 50%;
    top: 12px;
    translate: -50%;
    padding: 14px 12px;
  }

  @media (${maxDeviceWidth.mobileLg}) {
    top: 0;
    max-height: initial;
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`

export const Title = styled.h3`
  display: inline-block;
  max-width: 100%;
  padding: 0 12px;
  font-size: 26px;
  font-weight: 600;
  ${truncateText};

  @media (${maxDeviceWidth.tablet}) {
    font-size: 22px;
  }
`

export const OptionsList = styled(UserOptionsList)`
  margin-top: 20px;

  @media (${maxDeviceWidth.tablet}) {
    margin-top: 12px;
  }
`
