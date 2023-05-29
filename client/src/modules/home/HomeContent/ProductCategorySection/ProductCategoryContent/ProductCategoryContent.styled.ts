import styled from '@emotion/styled'

import ProductCardComponent from '@components/ShowcaseProductCard'

export const Root = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const ProductCard = styled(ProductCardComponent)`
  margin: 0 4px;
`
