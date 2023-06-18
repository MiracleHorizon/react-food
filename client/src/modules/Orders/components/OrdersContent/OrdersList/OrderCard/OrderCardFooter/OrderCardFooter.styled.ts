import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@styles/colors'

export const Root = styled.footer`
  display: flex;
  margin-top: auto;
`

export const Product = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 12px;
`

export const ProductImage = styled(NextImage)`
  object-fit: contain;
  border-radius: 12px;
`

export const ProductsRest = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${colors.gray['3']};

  span {
    font-size: 13px;
    line-height: 32px;
  }
`
