import styled from '@emotion/styled'

const productCardMaxWidth = 300

export const Root = styled.main`
  flex: 1 1 auto;
  max-width: ${productCardMaxWidth * 4}px;
`

export const Title = styled.h1`
  margin-top: 8px;
  margin-bottom: 14px;
  font-size: 44px;
  font-weight: 600;
`
