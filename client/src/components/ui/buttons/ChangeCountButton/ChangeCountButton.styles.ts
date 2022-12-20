import styled from '@emotion/styled'

// TODO Скорректировать размеры иконки.
const Button = styled.button<{ iconUrl: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #f1f0ed url(${p => p.iconUrl}) no-repeat center;
`

export default Button
