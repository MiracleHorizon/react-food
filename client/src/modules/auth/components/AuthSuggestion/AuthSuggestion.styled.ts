import styled from '@emotion/styled'
import NextLink from 'next/link'
import { lighten } from 'polished'

import { colors } from '@styles/colors'

export const Root = styled.p`
  display: inline-block;
  width: 100%;
  margin-top: 18px;
  text-align: center;
  font-size: 17px;
  line-height: 1.3;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

export const Title = styled.span`
  margin-right: 6px;
`

export const Link = styled(NextLink)`
  font-weight: 500;

  &:hover {
    color: ${lighten(0.25, colors.black.primary)};
  }
`
