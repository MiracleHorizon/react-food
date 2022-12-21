import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

// TODO Скорректировать размеры иконки.
const Button = styled.button<{ iconUrl: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${colors.gray1} url(${p => p.iconUrl}) no-repeat center;
  transition: background 0.2s ease-out;

  &:hover {
    background: ${colors.gray2} url(${p => p.iconUrl}) no-repeat center;
  }

  &:active {
    background: ${colors.gray3} url(${p => p.iconUrl}) no-repeat center;
  }
`

export default Button
