import styled from '@emotion/styled'
import NextImage from 'next/image'

import DiscountBadgeComponent from '@ui/DiscountBadge'
import { colors } from '@styles/colors'

export const Root = styled.div`
  position: relative;
  width: 240px;
  display: flex;
`

export const Container = styled.div`
  max-width: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  line-height: 1rem;
  margin-left: 12px;

  @media screen and (max-width: 1230px) {
    margin-left: 8px;
  }
`

export const DiscountBadge = styled(DiscountBadgeComponent)`
  position: absolute;
  top: 2px;
  left: -8px;
  z-index: 100;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  z-index: 0;

  @media screen and (max-width: 1230px) {
    // TODO: Sizes small
  }
`

export const Image = styled(NextImage)`
  border-radius: 24px;
  object-fit: cover;
`

export const Title = styled.span`
  margin-bottom: 4px;
  font-size: 17px;

  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }
`

export const Weight = styled.span`
  font-size: 17px;
  color: ${colors.gray['8']};

  @media screen and (max-width: 1230px) {
    font-size: 14px;
  }
`
