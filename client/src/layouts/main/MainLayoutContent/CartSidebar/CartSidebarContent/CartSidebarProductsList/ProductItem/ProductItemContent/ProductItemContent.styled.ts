import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.div`
  max-width: 105px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 10px;
  margin-right: auto;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;

  span {
    font-size: 13px;
  }
`

export const Title = styled.span`
  width: 100%;
  max-height: 100%;
  display: -webkit-box;
  margin-top: 2px;
  margin-bottom: 8px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
`

export const Weight = styled.span`
  color: ${colors.gray['8']};
`

export const TotalPrice = styled.span`
  font-weight: 500;
`

export const Dot = styled.span`
  display: inline-block;
  margin-left: 6px;
  margin-right: 4px;
  color: ${colors.gray['8']};
`

export const DiscountPrice = styled.span`
  margin-right: 6px;
  font-weight: 500;
  color: ${colors.orange.primary};
`

export const ThroughFullPrice = styled.span`
  margin-bottom: 2px;
  text-decoration: line-through;
  color: ${colors.gray['8']};
`
