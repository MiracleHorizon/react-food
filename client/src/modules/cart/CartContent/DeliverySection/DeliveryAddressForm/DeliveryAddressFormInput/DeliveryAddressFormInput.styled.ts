import styled from '@emotion/styled'

import { colors } from '@styles/colors'
import { truncateText } from '@styles/truncateText'
import { maxDeviceWidth, minDeviceWidth } from '@styles/responsiveness/devices'

const paddingX = 16

export const Root = styled.div<IsFocusedProps>`
  position: relative;
  flex: 1 1 auto;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px ${paddingX}px 0 ${paddingX}px;
  border: 1px solid #d2d0cc;
  border-radius: 16px;

  &:hover {
    label {
      ${p => !p.isFocused && `color: ${colors.black.primary}`};
    }
  }

  @media screen and (max-width: 600px) and (${minDeviceWidth.mobileLg}) {
    height: 46px;
  }

  @media screen and (${maxDeviceWidth.mobileLg}) {
    height: 44px;
    padding-top: 0;
  }
`

export const Label = styled.label<IsFocusedProps>`
  position: absolute;
  left: 16px;
  width: calc(100% - ${paddingX * 2}px);
  color: ${colors.gray['8']};
  ${truncateText};
  z-index: 1;
  transition: all 0.2s ease-out;

  ${p => {
    return p.isFocused
      ? `
        top: 6px;
        font-size: 12px;
      `
      : `
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
    `
  }};

  @media screen and (${maxDeviceWidth.mobileLg}) {
    top: 50%;
    transform: translateY(-50%);
    ${p => (p.isFocused ? 'display: none' : 'font-size: 15px')};
  }

  @media screen and (max-width: 600px) and (${minDeviceWidth.mobileLg}) {
    ${p => !p.isFocused && 'font-size: 14px'};
  }
`

export const Input = styled.input`
  height: 100%;
  width: 100%;
  font-size: 16px;

  @media screen and (max-width: 600px) and (${minDeviceWidth.mobileLg}) {
    font-size: 14px;
  }
`

interface IsFocusedProps {
  isFocused: boolean
}
