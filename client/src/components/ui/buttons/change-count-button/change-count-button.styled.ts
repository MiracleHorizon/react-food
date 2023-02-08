import styled from '@emotion/styled'

import {colors} from '@styles/variables'

// TODO Скорректировать размеры иконки.
const Button = styled.button<{ iconUrl: string; disabled?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${colors.gray['3']} url(${p => p.iconUrl}) no-repeat center;
  transition: background 0.2s ease-out;
  ${p =>
    p.disabled &&
    `
    pointer-events: none;
    opacity: 0.3;
    background-color: ${colors.gray['7']};
  `};

  &:hover {
    background-color: ${colors.gray['7']};
  }

  &:active {
    background-color: ${colors.gray['7']};
  }
`

export default Button
