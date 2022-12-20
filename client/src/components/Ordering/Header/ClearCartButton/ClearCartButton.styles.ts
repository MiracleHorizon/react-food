import styled from '@emotion/styled'

const Button = styled.button`
  height: 30px;
  opacity: 0.4;
  color: #21201f;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    margin-right: 4px;
  }
`

export default Button
