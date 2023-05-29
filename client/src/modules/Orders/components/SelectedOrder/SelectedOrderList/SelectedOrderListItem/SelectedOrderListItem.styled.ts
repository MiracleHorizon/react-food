import styled from '@emotion/styled'
import NextImage from 'next/image'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(&:first-of-type) {
    margin-top: 18px;
  }

  span {
    font-size: 16px;
  }

  @media (max-width: 650px) {
    &:not(&:first-of-type) {
      margin-top: 16px;
    }

    span {
      font-size: 14px;
    }
  }

  @media (max-width: 500px) {
    align-items: center;

    &:not(&:first-of-type) {
      margin-top: 12px;
    }
  }

  @media (${maxDeviceWidth.mobileMd}) {
    &:not(&:first-of-type) {
      margin-top: 8px;
    }

    span {
      font-size: 13px;
    }
  }
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  max-width: 80%;
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 4px 0;
  margin-right: 10px;

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-word;
    overflow: hidden;
    line-height: 22px;
  }

  @media (max-width: 650px) {
    padding: 2px 0;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  min-width: 48px;
  width: 48px;
  height: 48px;
  margin-right: 12px;

  @media (max-width: 650px) {
    min-width: 40px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`

export const Image = styled(NextImage)`
  object-fit: contain;
`
