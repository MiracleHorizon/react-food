import styled from '@emotion/styled'

import ArrowSvg from '@ui/svg/ArrowSvg'
import MapPinSvg from '@ui/svg/MapPinSvg'
import { colors } from '@styles/colors'
import { truncateText } from '@styles/truncateText'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

const buttonBorder = '1px solid rgb(210, 208, 204)'

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-width: 300px;
  width: 100%;
  padding: 8px;
  border-radius: 16px;
  border: ${buttonBorder};
  transition: background 150ms ease-out;

  &:focus {
    border: ${buttonBorder};
  }

  &:hover {
    background: ${colors.gray['2']};
  }

  @media screen and (${maxDeviceWidth.mobileLg}) {
    max-width: 100%;
  }
`

export const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
  ${truncateText};
`

export const MapPinIcon = styled(MapPinSvg)`
  margin-top: -3px;
  margin-right: 4px;
`

export const ArrowIcon = styled(ArrowSvg)<ArrowIconProps>`
  width: 26px;
  height: 26px;
  margin-left: auto;
  rotate: ${p => (p.open ? 270 : 90)}deg;
`

interface ArrowIconProps {
  open: boolean
}
