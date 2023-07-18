import styled from '@emotion/styled'

import { ProductItem } from './ProductItem'

export const Item = styled(ProductItem)`
  &:not(&:first-of-type) {
    margin-top: 24px;

    @media screen and (max-width: 1230px) {
      margin-top: 14px;
    }
  }
`
