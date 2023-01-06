import styled from '@emotion/styled'

export const DefaultRoundedDiv = styled.div<{ bgColor?: string }>`
  padding: 32px;
  border-radius: 32px;
  background: ${p => p.bgColor || 'white'};
`
