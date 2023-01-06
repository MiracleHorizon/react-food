import styled from '@emotion/styled'

const ellipsisText = `
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const EllipsisSpan = styled.span`
  ${ellipsisText};
`
