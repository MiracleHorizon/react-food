import styled from '@emotion/styled'
import NextLink from 'next/link'

import { colors } from '@styles/colors'

const imageSize = 44

export const Root = styled.header`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Content = styled.div`
  min-width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.h2`
  height: 30px;
  display: inline-block;
  margin-left: 4px;
  padding: 0 4px;
`

export const Link = styled(NextLink)`
  font-size: 24px;
  font-weight: 600;
`

// TODO: Унифицировать с компонентами в навигации
export const Picture = styled.div<PictureProps>`
  min-width: ${imageSize}px;
  width: ${imageSize}px;
  height: ${imageSize}px;
  margin: 0 4px;
  background-image: url(${p => p.bgImagePath});
  background-size: ${imageSize}px ${imageSize}px;
  background-repeat: no-repeat;
  background-position: center;
`

export const PictureFallback = styled.div`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 12px;
  background: ${colors.gray['5']};
`

interface PictureProps {
  bgImagePath: string
}
