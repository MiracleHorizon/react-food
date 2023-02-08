import styled from '@emotion/styled'

export const List = styled.ul`
  &:not(&:last-of-type) {
    margin-bottom: 32px;
  }
`

export const ListTitle = styled.h6`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 6px;

  &:not(&:last-of-type) {
    border-bottom: 1px solid rgba(138, 135, 132, 0.4);
  }

  span {
    font-size: 15px;
  }
`
