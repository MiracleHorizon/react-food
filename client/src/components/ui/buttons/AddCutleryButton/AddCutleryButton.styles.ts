import styled from '@emotion/styled'

const Button = styled.button`
  height: 50px;
  border-radius: 16px;
  padding: 13px 18px;
  background: #f1f0ed;
  transition: background 0.2s ease-out;

  &:hover {
    background: #e7e6e4;
  }

  &:active {
    background: #dedddb;
  }

  img {
    margin-right: 10px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 17px;
    color: #21201f;
  }
`

export default Button
