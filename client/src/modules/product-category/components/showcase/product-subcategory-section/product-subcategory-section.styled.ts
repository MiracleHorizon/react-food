import styled from '@emotion/styled'
import Link from 'next/link'

export const Root = styled.section`
  width: 100%;
  padding: 10px 0;

  &:not(&:last-of-type) {
    margin-bottom: 14px;
  }
`

export const TitleLink = styled(Link)`
  display: inline-block;
  margin-bottom: 25px;
  font-size: 26px;
  font-weight: 600;
`

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  gap: 14px;

  div[data-el='product-card'] {
    min-width: 224px;
    max-width: 300px;
    width: 100%;
  }
`
