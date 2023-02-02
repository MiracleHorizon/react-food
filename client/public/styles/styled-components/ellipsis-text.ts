import styled from '@emotion/styled'

const ellipsisText = `
  text-overflow: ellipsis;
  overflow: hidden;
`

export const EllipsisSpan = styled.span<EllipsisTextProps>`
  ${ellipsisText};
  ${p => p.withNoWrapWhiteSpace && 'white-space: nowrap'};
`

export interface EllipsisTextProps {
  withNoWrapWhiteSpace?: boolean
}
