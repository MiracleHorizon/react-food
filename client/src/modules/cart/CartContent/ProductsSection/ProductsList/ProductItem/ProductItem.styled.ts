import styled from '@emotion/styled'

import { ChangeCountLabel as ChangeCountLabelComponent } from '@ui/ChangeCountLabel'
import { colors } from '@styles/colors'

export const Root = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    align-items: flex-start;
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

  @media screen and (max-width: 550px) {
    display: none;
  }
`

export const Price = styled.span`
  font-size: 22px;

  @media screen and (max-width: 1230px) {
    font-size: 16px;
  }
`

export const ThroughFullPrice = styled.span`
  margin-bottom: 2px;
  font-size: 14px;
  text-decoration: line-through;
  color: ${colors.gray['8']};
`

// TODO: Text overflow
export const ChangeCountLabel = styled(ChangeCountLabelComponent)`
  margin-right: 10px;

  button {
    width: 40px;
    height: 40px;
  }

  span {
    margin: 0 4px;
  }

  @media screen and (max-width: 1230px) {
    button {
      width: 34px;
      height: 34px;
    }

    span {
      margin: 0;
    }
  }

  @media screen and (max-width: 550px) {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    button {
      width: 28px;
      height: 28px;
      border-radius: 10px;
    }

    span {
      min-width: 36px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 390px) {
    button {
      width: 25px;
      height: 25px;
      border-radius: 8px;
    }

    span {
      min-width: 24px;
      font-size: 12px;
    }
  }
`
