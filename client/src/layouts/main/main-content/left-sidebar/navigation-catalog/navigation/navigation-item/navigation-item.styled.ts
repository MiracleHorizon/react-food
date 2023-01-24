import styled from '@emotion/styled'
import NextLink from 'next/link'

import { colors } from '@/styles/variables'

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

    div[data-el='nav-img-fb'] {
      background: ${colors.gray['3']};
    }
  }
`

export const Link = styled(NextLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 4px;
`

export const Image = styled.div<ImageProps>`
  min-width: ${imageSize}px;
  width: ${imageSize}px;
  height: ${imageSize}px;
  background-image: url(${p => p.backgroundImage});
  background-size: ${imageSize}px ${imageSize}px;
  background-repeat: no-repeat;
  background-position: center;
`

export const ImageFallback = styled.div`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 12px;
  background: ${colors.gray['5']};
`

export const Content = styled.div`
  margin-left: 12px;
`

export const Title = styled.h6<TitleProps>`
  font-size: 17px;
  font-weight: ${p => (p.selected ? 600 : 400)};
`

interface ImageProps {
  backgroundImage: string
}

interface TitleProps {
  selected: boolean
}
