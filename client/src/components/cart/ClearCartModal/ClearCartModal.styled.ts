import styled from '@emotion/styled'

import { Button as ButtonComponent } from '@ui/Button'

export const Panel = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 24px;
  border-radius: 32px;
  background: white;
`

export const Header = styled.header`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 24px;
`

export const Title = styled.h3`
  border-radius: 32px;
  font-size: 24px;
  font-weight: 600;
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
`
