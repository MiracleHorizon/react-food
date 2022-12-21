import styled from '@emotion/styled'

export const Root = styled.footer`
  margin-top: auto;

  svg {
    width: 24px;
    height: 24px;
  }
`

export const Content = styled.div`
  height: 48px;
  padding: 14px;
  border-radius: 12px;
  background: #f5f4f2;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const CartButton = styled.button`
  width: 100%;
  height: 100%;
`

export const CounterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Counter = styled.span`
  font-size: 16px;
`
