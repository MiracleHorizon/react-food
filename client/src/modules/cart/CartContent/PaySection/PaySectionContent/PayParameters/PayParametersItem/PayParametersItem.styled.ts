import styled from '@emotion/styled'

export const Root = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(&:last-of-type) {
    margin-bottom: 18px;
  }

  span {
    font-size: 17px;
  }
`
