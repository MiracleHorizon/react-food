import styled from '@emotion/styled'
import NextLink from 'next/link'

import { colors } from '@styles/colors'

const imageSize = 44

export const Root = styled.li`
  height: 52px;
  margin: 1px 0;
  padding-left: 4px;
  padding-right: 8px;
  border-radius: 12px;
  transition: background 50ms ease-in-out;

  &:hover {
    background: ${colors.gray['5']};
  }
`

export const Link = styled(NextLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 4px;
`

export const Picture = styled.div<PictureProps>`
  min-width: ${imageSize}px;
  width: ${imageSize}px;
  height: ${imageSize}px;
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

export const Content = styled.div`
  width: calc(100% - ${imageSize}px - 12px);
  margin-left: 12px;
`

export const Title = styled.h6<TitleProps>`
  font-size: 17px;
  font-weight: ${p => (p.isItemSelected ? 600 : 500)};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

interface PictureProps {
  bgImagePath: string
}

interface TitleProps {
  isItemSelected: boolean
}
