import styled from '@emotion/styled'

import { Button as ButtonComponent } from '@ui/Button'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Panel = styled.div<PanelProps>`
  max-width: 400px;
  width: 100%;
  padding: ${p => (p.withTitle ? '24px' : '18px 24px')};
  border-radius: 32px;
  background: white;
  margin: 0 14px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    padding: 16px 22px;
  }
`

export const Header = styled.header`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 24px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    padding-bottom: 18px;
  }
`

export const TitleArticle = styled.article`
  width: 100%;
  text-align: center;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    font-size: 22px;
  }
`

export const Content = styled.main`
  display: flex;
  justify-content: space-between;
`

export const Button = styled(ButtonComponent)`
  flex: 1 1 auto;

  &:first-of-type {
    margin-right: 6px;
  }

  &:last-of-type {
    margin-left: 6px;
  }

  span {
    font-weight: 500;
  }
`

interface PanelProps {
  withTitle: boolean
}
