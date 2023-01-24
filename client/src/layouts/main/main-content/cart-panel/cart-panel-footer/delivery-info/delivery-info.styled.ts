import styled from '@emotion/styled'

import { colors } from '@/styles/variables'

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;

  span {
    font-size: 14px;
  }
`

export const Title = styled.span`
  margin-bottom: 6px;
  line-height: 16px;
`

export const ServiceFee = styled.span`
  color: ${colors.gray['8']};
`
