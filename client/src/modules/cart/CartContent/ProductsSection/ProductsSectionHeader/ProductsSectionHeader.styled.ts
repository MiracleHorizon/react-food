import styled from '@emotion/styled'

import ClearCartLabelComponent from '@components/cart/ClearCartLabel'
import { colors } from '@styles/colors'

export const Root = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 26px;

  @media screen and (max-width: 1230px) {
    margin-bottom: 18px;
  }
`

export const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 1230px) {
    font-size: 21px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 2px;
    font-size: 19px;
  }
`

export const ProductsCount = styled.span`
  font-size: 17px;
  color: ${colors.gray['8']};

  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const ClearCartLabel = styled(ClearCartLabelComponent)`
  @media screen and (max-width: 480px) {
    span {
      font-size: 15px;
    }

    img {
      margin-right: 2px;
    }
  }
`
