import styled from '@emotion/styled'

import BaseProductCard from '@components/product-card'

export const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const ProductCard = styled(BaseProductCard)`
  margin: 0 4px;
`
