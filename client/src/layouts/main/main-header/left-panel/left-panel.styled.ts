import styled from '@emotion/styled'

import { devicesMaxWidth } from '@/styles/responsive/devices'

const StyledPanel = styled.div`
  div[data-el='app-logo'] {
    @media ${devicesMaxWidth.laptop} {
      display: none;
    }
  }
`

export default StyledPanel
