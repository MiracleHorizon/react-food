import styled from '@emotion/styled'

import { colors } from '@/styles/variables'

export const Root = styled.main`
  flex: 1 1 auto;
  margin-top: 20px;
  margin-bottom: 12px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`

export const Title = styled.span`
  display: inline-block;
  height: 40px;
  margin-top: 7px;
  font-size: 17px;
  line-height: 22px;
`

export const Price = styled.span`
  font-size: 24px;
  font-weight: 500;
`

export const Weight = styled.span`
  display: inline-block;
  font-size: 17px;
  color: ${colors.gray['8']};
`
