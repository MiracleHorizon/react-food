import styled from '@emotion/styled'

import { UserOptionsList } from '@components/user/UserOptionsList'

export const Root = styled.section`
  width: 100%;
`

export const OptionsList = styled(UserOptionsList)`
  li {
    height: 50px;
    border-radius: 12px;
  }
`
