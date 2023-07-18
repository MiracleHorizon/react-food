import styled from '@emotion/styled'
import NextImage from 'next/image'

import { DiscountBadge as DiscountBadgeComponent } from '@ui/DiscountBadge'
import { colors } from '@styles/colors'

export const imageSize = 60

export const Root = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    height: 0.5px;
    background: #8a878466;
  }

  &:last-of-type {
    &::before {
      left: 0;
      bottom: -4px;
    }
  }

  &:not(&:last-of-type) {
    &::before {
      left: calc(${imageSize}px + 8px);
      bottom: 0;
    }
  }
`

export const DiscountBadge = styled(DiscountBadgeComponent)`
  position: absolute;
  left: -4px;
  bottom: 6px;
  rotate: -4deg;
`

export const Image = styled(NextImage)`
  border-radius: 18px;
  background: ${colors.gray['2']};
  object-fit: cover;
`
