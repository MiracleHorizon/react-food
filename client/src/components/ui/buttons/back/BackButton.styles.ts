import styled from '@emotion/styled'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  color: #9e9b98;
  stroke: #9e9b98;
  opacity: 0.7;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }

  svg {
    margin-right: 6px;
  }
`

export default Button
