import styled from '@emotion/styled'
import Link from 'next/link'

export const Root = styled.div`
  width: 100%;
  text-align: center;
`

export const Title = styled.h3`
  width: 100%;
  display: inline-block;
  margin-bottom: 12px;
  text-align: center;
  font-weight: 600;
`

export const Text = styled.p`
  font-size: 19px;
`

export const AuthorText = styled.span`
  display: inline-block;
  margin-top: 12px;
  line-height: 22px;
  font-size: 18px;
`

export const AuthorLink = styled(Link)`
  opacity: 0.8;
  text-decoration: underline;
`
