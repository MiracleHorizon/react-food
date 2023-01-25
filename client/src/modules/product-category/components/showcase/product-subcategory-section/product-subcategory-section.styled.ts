import styled from '@emotion/styled'
import Link from 'next/link'

export const Root = styled.section`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 14px;
`

export const TitleLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  gap: 14px 8px;
  padding-bottom: 10px;
`
