import styled from '@emotion/styled'
import NextImage from 'next/image'

import { DiscountBadge as DiscountBadgeComponent } from '@ui/DiscountBadge'
import { colors } from '@styles/colors'

export const Root = styled.div`
  position: relative;
  width: 300px;
  display: flex;
`

export const Wrapper = styled.div`
  max-width: 160px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  line-height: 20px;
  margin-left: 25px;

  @media screen and (max-width: 1230px) {
    margin-left: 12px;
  }

  @media screen and (max-width: 390px) {
    margin: 0 9px;
  }
`

export const DiscountBadge = styled(DiscountBadgeComponent)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  z-index: 100;

  img {
    width: 26px;
    height: 26px;
  }

  @media screen and (max-width: 1230px) {
    width: 24px;
    height: 24px;
    border-radius: 6px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  min-width: 100px;
  z-index: 0;

  @media screen and (max-width: 1230px) {
    width: 65px;
    height: 65px;
    min-width: 65px;
  }

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }

  @media screen and (max-width: 390px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
`

export const Image = styled(NextImage)`
  border-radius: 24px;
  object-fit: cover;
`

// TODO: Стили overflow вынести в миксины
export const Title = styled.span`
  display: -webkit-box;
  margin-bottom: 4px;
  font-size: 17px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    font-size: 13px;
    line-height: 0.85rem;
  }

  @media screen and (max-width: 390px) {
    font-size: 12px;
  }
`

export const Weight = styled.span`
  font-size: 17px;
  color: ${colors.gray['8']};

  @media screen and (max-width: 1230px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`

export const Price = styled.span`
  display: none;

  @media screen and (max-width: 550px) {
    display: initial;
    font-size: 14px;
    margin-left: 8px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 6px;
    font-size: 12px;
  }
`
