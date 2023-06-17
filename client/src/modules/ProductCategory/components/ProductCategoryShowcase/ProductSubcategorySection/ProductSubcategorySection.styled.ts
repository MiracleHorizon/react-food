import styled from '@emotion/styled'
import Link from 'next/link'

export const Root = styled.section`
  width: 100%;
  padding: 10px 0;

  &:not(&:last-of-type) {
    margin-bottom: 14px;
  }
`

export const Title = styled(Link)`
  width: 100%;
  display: inline-block;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 600;

  @media screen and (max-width: 505px) {
    margin-bottom: 14px;
    text-align: center;
    font-size: 24px;
  }
`
