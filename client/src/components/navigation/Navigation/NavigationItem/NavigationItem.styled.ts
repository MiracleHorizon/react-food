import styled from '@emotion/styled'
import NextLink from 'next/link'

import { colors } from '@styles/colors'
import { truncateText } from '@styles/truncateText'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

const imageSize = 44
const smallImageSize = 38

export const Root = styled.li`
  height: 50px;
  margin: 1px 0;
  padding-left: 4px;
  padding-right: 8px;
  border-radius: 12px;
  transition: background 50ms ease-in-out;

  &:hover {
    background: ${colors.gray['5']};
  }

  @media screen and (${maxDeviceWidth.mobileLg}) {
    height: 46px;
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
  background-size: ${imageSize}px ${imageSize}px;
  background-image: url(${p => p.bgImagePath});
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    min-width: ${smallImageSize}px;
    width: ${smallImageSize}px;
    height: ${smallImageSize}px;
    background-size: ${smallImageSize}px ${smallImageSize}px;
  }
`

export const PictureFallback = styled.div`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 12px;
  background: ${colors.gray['5']};

  @media screen and (${maxDeviceWidth.mobileLg}) {
    width: ${smallImageSize}px;
    height: ${smallImageSize}px;
  }
`

export const Content = styled.div`
  width: calc(100% - ${imageSize}px - 12px);
  margin-left: 12px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    width: calc(100% - ${smallImageSize}px - 12px);
  }
`

export const Title = styled.h6<TitleProps>`
  font-size: 17px;
  font-weight: ${p => (p.isItemSelected ? 600 : 500)};
  ${truncateText};

  @media screen and (${maxDeviceWidth.mobileLg}) {
    font-size: 15px;
  }
`

interface PictureProps {
  bgImagePath: string
}

interface TitleProps {
  isItemSelected: boolean
}
