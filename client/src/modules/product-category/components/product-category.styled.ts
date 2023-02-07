import styled from '@emotion/styled'

export const productCardMaxWidth = 300

export const StyledWrapper = styled.main`
  max-width: ${productCardMaxWidth * 4}px;
  min-width: calc(100vw - 240px - 110px - 320px - 50px);
  padding-bottom: 20px;
`
