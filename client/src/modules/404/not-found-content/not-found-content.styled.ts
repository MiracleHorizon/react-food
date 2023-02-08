import styled from '@emotion/styled'
import Link from 'next/link'

import { devicesMaxWidth } from '@styles/responsive/devices'
import { smallScreenMaxWidth } from '../not-found.styled'

export const Root = styled.div`
  max-width: 410px;

  @media (${devicesMaxWidth.laptop}) {
    margin-top: 50px;
    text-align: center;
  }

  @media (${smallScreenMaxWidth}) {
    max-width: 360px;
    min-width: auto;
    width: auto;
    margin: 0;
  }
`

export const Title = styled.h1`
  margin-bottom: 14px;
  font-size: 48px;
  font-weight: 800;

  @media (${smallScreenMaxWidth}) {
    font-size: 24px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  opacity: 0.6;
`

export const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 45px;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.7;
  transition: opacity 50ms ease-in;

  &:hover {
    opacity: 1;
  }

  @media (${smallScreenMaxWidth}) {
    position: absolute;
    left: 50%;
    bottom: 15vh;
    width: 100%;
    translate: -50% 0;
  }
`
