import styled from '@emotion/styled'
import NextLink from 'next/link'

import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

export const Root = styled.li`
  cursor: pointer;
  width: 100%;
  border-radius: 16px;
  background: transparent;
  transition: background 0.1s ease-out;

  &:not(&:last-of-type) {
    margin-bottom: 14px;
  }

  &:hover {
    background: ${colors.gray['4']};
  }

  &:active {
    background: ${colors.gray['6']};
  }
`

export const Caption = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 14px 12px;
  font-size: 17px;

  @media screen and (${maxDeviceWidth.tablet}) {
    padding: 12px;
  }
`

export const Link = Caption.withComponent(NextLink)
