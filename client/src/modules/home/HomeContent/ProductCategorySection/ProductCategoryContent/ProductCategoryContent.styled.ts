import styled from '@emotion/styled'

import { ShowcaseProductCard } from '@components/products/ShowcaseProductCard'

export const Root = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const Scroll = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
`

export const ProductCard = styled(ShowcaseProductCard)`
  margin: 0 4px;
`
