import styled from '@emotion/styled'
import NextLink from 'next/link'

import { colors } from '@styles/colors'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Link = styled(NextLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MockLogo = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${colors.gray['7']};
`

export const TextContainer = styled.div`
  margin-left: 12px;
`

export const Title = styled.h2`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Slogan = styled.p`
  font-size: 16px;
  color: #7b7b7b;
`
