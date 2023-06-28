import styled from '@emotion/styled'

export const Root = styled.main`
  max-width: ${300 * 4}px;
  min-width: calc(100vw - 240px - 110px - 320px - 50px);
  padding-bottom: 10px;

  @media screen and (max-width: 1240px) {
    max-width: initial;
    width: 100%;
  }
`
