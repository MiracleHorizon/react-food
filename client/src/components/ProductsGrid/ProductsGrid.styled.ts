import styled from '@emotion/styled'

import ShowcaseProductCard from '@components/ShowcaseProductCard'

const minCardWidth = 224

export const Root = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(${minCardWidth}px, 1fr));
  gap: 10px;
`

export const Card = styled(ShowcaseProductCard)`
  min-width: ${minCardWidth}px;
  max-width: 300px;
  width: 100%;
`
