import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.li<RootProps>`
  width: 100%;
  padding: 24px 0;

  &:not(&:last-of-type) {
    border-bottom: 1px solid ${colors.gray['7']};
  }

  @media screen and (max-width: 500px) {
    ${p => p.isEditing && 'padding-top: 16px'};
  }
`

export const ClosedContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 16px;
  }
`

export const EditButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface RootProps {
  isEditing: boolean
}
