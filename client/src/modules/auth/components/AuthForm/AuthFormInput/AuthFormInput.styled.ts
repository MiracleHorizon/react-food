import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.div`
  padding: 12px;
  border-radius: 18px;
  border: 2px solid ${colors.gray['7']};

  &:not(&:first-of-type) {
    margin-top: 14px;
  }
`

export const Field = styled.input``
