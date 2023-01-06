import styled from '@emotion/styled'

import { devicesMaxWidth } from '@/public/styles/responsive/devices'

const LeftBar = styled.div`
  div[data-el='app-logo'] {
    @media ${devicesMaxWidth.laptop} {
      display: none;
    }
  }
`

export default LeftBar
