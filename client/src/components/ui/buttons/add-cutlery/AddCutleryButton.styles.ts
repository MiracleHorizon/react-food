import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

const Button = styled.button`
  height: 50px;
  border-radius: 16px;
  padding: 13px 18px;
  background: ${colors.gray1};
  transition: background 0.2s ease-out;

  &:hover {
    background: ${colors.gray2};
  }

  &:active {
    background: ${colors.gray3};
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
