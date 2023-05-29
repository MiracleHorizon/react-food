import styled from '@emotion/styled'

import CartProductHoc from '@hoc/withCartProduct'

export const Item = styled(CartProductHoc)`
  &:not(&:first-of-type) {
    margin-top: 24px;

    @media screen and (max-width: 1230px) {
      margin-top: 14px;
    }
  }
`
