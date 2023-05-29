import styled from '@emotion/styled'

export const productCardMaxWidth = 300

export const Root = styled.main`
  max-width: ${productCardMaxWidth * 4}px;
  min-width: calc(100vw - 240px - 110px - 320px - 50px);
  padding-bottom: 20px;

  @media screen and (max-width: 1240px) {
    max-width: initial;
    width: 100%;
  }
`
