import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: 1px solid ${colors.gray['6']};
  transition: opacity 30ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`

export const Address = styled.span`
  font-size: 16px;
`

export const City = styled.span`
  margin-top: 2px;
  font-size: 15px;
  color: ${colors.gray['8']};
`
