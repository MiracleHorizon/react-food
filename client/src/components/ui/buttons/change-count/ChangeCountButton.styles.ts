import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

// TODO Скорректировать размеры иконки.
const Button = styled.button<{ iconUrl: string; disabled?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${colors.gray1} url(${p => p.iconUrl}) no-repeat center;
  transition: background 0.2s ease-out;
  ${p =>
    p.disabled &&
    `
    pointer-events: none;
    opacity: 0.3;
    background-color: ${colors.gray3};
  `};

  &:hover {
    background-color: ${colors.gray2};
  }

  &:active {
    background-color: ${colors.gray3};
  }
`

export default Button
