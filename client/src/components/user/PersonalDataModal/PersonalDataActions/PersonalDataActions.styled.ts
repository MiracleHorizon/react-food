import styled from '@emotion/styled'

import { Button as ButtonComponent } from '@ui/Button'

export const Root = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

export const Button = styled(ButtonComponent)`
  height: 46px;
  font-weight: 500;

  &:not(&:last-of-type) {
    margin-right: 12px;
  }
`
