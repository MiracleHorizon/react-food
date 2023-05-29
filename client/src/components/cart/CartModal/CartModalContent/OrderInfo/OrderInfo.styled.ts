import styled from '@emotion/styled'

export const Root = styled.div`
  width: 100%;
  padding-top: 18px;
  padding-bottom: 12px;
  border-top: 1px solid rgba(138, 135, 132, 0.4);
`

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(&:last-of-type) {
    margin-bottom: 24px;
  }

  span {
    font-size: 16px;
  }
`
