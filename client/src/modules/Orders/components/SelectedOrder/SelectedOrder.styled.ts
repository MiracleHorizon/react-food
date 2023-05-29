import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

export const Root = styled.div`
  min-width: 600px;
  width: 600px;
  padding: 32px;
  margin-left: 100px;
  border-radius: 32px;
  background: white;
  transition: all 0.2s ease-out;

  @media (max-width: 1260px) {
    min-width: 500px;
    width: 500px;
    margin-left: 70px;
  }

  @media (max-width: 1120px) {
    margin-left: 30px;
  }

  @media (${maxDeviceWidth.laptop}) {
    width: 600px;
    margin: 0;
  }

  @media (${maxDeviceWidth.tablet}) {
    min-width: initial;
    width: 100%;
    padding: 24px;
  }

  @media (max-width: 500px) {
    padding: 16px;
  }
`

export const SectionTitle = styled.h4`
  font-size: 17px;
  font-weight: 400;
  color: ${colors.gray['8']};

  @media (${maxDeviceWidth.tablet}) {
    font-size: 16px;
  }

  @media (${maxDeviceWidth.mobileMd}) {
    font-size: 14px;
  }
`
