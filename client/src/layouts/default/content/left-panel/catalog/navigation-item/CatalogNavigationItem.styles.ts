import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

const IMAGE_SIZE = 44

export const Root = styled.li`
  height: 52px;
  margin: 1px 0;
  border-radius: 12px;
  padding-left: 4px;
  padding-right: 8px;
  transition: background 50ms ease-in-out;

  &:hover {
    background: ${colors.gray2};
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2px 4px;
  }
`

export const Image = styled.div<ImageProps>`
  min-width: ${IMAGE_SIZE}px;
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  background-image: url(${p => p.imageUrl});
  background-size: ${IMAGE_SIZE}px ${IMAGE_SIZE}px;
  background-repeat: no-repeat;
  background-position: center;
`

export const ImageFallback = styled.div`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-radius: 12px;
  background: ${colors.gray1};
`

export const Content = styled.div`
  margin-left: 12px;
`

export const Title = styled.p<TitleProps>`
  font-size: 17px;
  ${p => p.isSelected && 'font-weight: 600'};
`

interface ImageProps {
  imageUrl: string
}

interface TitleProps {
  isSelected: boolean
}
