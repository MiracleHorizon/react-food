import styled from '@emotion/styled'

import ChangeCountLabelComponent from '@ui/ChangeCountLabel'
import { colors } from '@styles/colors'

export const Root = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(&:first-of-type) {
    margin-top: 24px;
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`

export const PriceLabel = styled.div`
  min-width: 70px;
  max-width: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;

  @media screen and (max-width: 1230px) {
    min-width: 60px;
    max-width: 60px;
  }
`

export const Price = styled.span`
  font-size: 17px;

  @media screen and (max-width: 1230px) {
    font-size: 14px;
  }
`

export const ThroughFullPrice = styled.span`
  margin-bottom: 2px;
  font-size: 14px;
  text-decoration: line-through;
  color: ${colors.gray['8']};
`

export const ChangeCountLabel = styled(ChangeCountLabelComponent)`
  margin-right: 10px;

  button {
    width: 32px;
    height: 32px;
  }

  span {
    margin: 0 2px;
  }

  @media screen and (max-width: 1230px) {
    button {
      width: 32px;
      height: 32px;
    }

    span {
      margin: 0;
    }
  }
`
