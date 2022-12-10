import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

export const Root = styled.div`
  cursor: pointer;
  min-width: 150px;
  max-width: 200px;
  width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  border-radius: 30px;
  background-color: ${colors.orangePrimary};
  transition: filter 50ms ease-in;

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(95%);
  }

  span {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`

export const CartBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 8px;
  }
`

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  margin: 0 13px;
  background: rgba(255, 255, 255, 0.25);
`
