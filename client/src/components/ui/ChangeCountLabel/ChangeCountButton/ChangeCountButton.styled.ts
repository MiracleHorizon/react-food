import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { colors } from '@styles/colors'

export const Button = styled.button<Props>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${colors.gray['3']} url(${p => p.imagePath}) no-repeat center;
  background-size: 33%;
  ${p => p.isDisabled && disabledButtonStyles};

  &:hover {
    background-color: ${colors.gray['7']};
  }

  &:active {
    background-color: ${colors.gray['7']};
  }
`

const disabledButtonStyles = css`
  opacity: 0.3;
  background-color: ${colors.gray['7']};
  pointer-events: none;
`

interface Props {
  imagePath: string
  isDisabled?: boolean
}
