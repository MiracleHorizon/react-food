import styled from '@emotion/styled'

import { ShowcaseProductCard } from '@components/products/ShowcaseProductCard'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

const minCardWidth = 224

export const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${minCardWidth}px, 1fr));
  gap: 10px;

  @media screen and (${maxDeviceWidth.tablet}) {
    justify-items: center;
  }
`

export const Card = styled(ShowcaseProductCard)`
  min-width: ${minCardWidth}px;
  width: 100%;

  @media screen and (max-width: 550px) {
    max-width: 300px;
  }
`
