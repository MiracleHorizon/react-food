import styled from '@emotion/styled'

import SegmentedControlComponent from '@ui/SegmentedControl'

export const Root = styled.div`
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: solid 1px #d2d0cc;

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`

export const Title = styled.h3`
  font-size: 21px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 19px;
  }
`

export const SegmentedControl = styled(SegmentedControlComponent)`
  @media screen and (max-width: 480px) {
    height: 46px;
  }
`
