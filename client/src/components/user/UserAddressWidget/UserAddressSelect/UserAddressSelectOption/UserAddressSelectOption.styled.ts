import styled from '@emotion/styled'

import { listBorderRadius } from '../UserAddressSelect.styled'
import { truncateText } from '@styles/truncateText'
import { colors } from '@styles/colors'

export const Root = styled.li`
  cursor: pointer;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  &:first-of-type {
    border-radius: ${listBorderRadius}px ${listBorderRadius}px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 ${listBorderRadius}px ${listBorderRadius}px;
  }

  &:hover {
    background: ${colors.gray['2']};
  }
`

export const Title = styled.span`
  max-width: 90%;
  font-size: 16px;
  ${truncateText};
`
