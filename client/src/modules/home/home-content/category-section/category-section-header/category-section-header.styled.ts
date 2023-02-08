import styled from '@emotion/styled'
import Link from 'next/link'

import { colors } from '@styles/variables'

const imageSize = 44

export const Root = styled.header`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Title = styled.h2`
  height: 30px;
  display: inline-block;
  padding: 0 4px;
  margin-left: 4px;
`

export const TitleLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: 600;
`

export const Image = styled.div<ImageProps>`
  min-width: ${imageSize}px;
  width: ${imageSize}px;
  height: ${imageSize}px;
  margin: 0 4px;
  background-image: url(${p => p.backgroundImage});
  background-size: ${imageSize}px ${imageSize}px;
  background-repeat: no-repeat;
  background-position: center;
`

// TODO Унифицировать с компонентами в навигации
export const ImageFallback = styled.div`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 12px;
  background: ${colors.gray['5']};
`

export const Content = styled.div`
  min-width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

interface ImageProps {
  backgroundImage: string
}
