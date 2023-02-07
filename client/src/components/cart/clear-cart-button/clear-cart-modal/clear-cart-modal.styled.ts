import styled from '@emotion/styled'

import Button from '@/ui/buttons/button'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledButton = styled(Button)`
  flex: 1 1 auto;

  &:first-of-type {
    margin-right: 6px;
  }

  &:last-of-type {
    margin-left: 6px;
  }
`
