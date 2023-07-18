import styled from '@emotion/styled'

export const Item = styled.li`
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

  @media screen and (max-width: 1230px) {
    &:not(&:last-of-type) {
      margin-bottom: 16px;
    }

    span {
      font-size: 15px;
    }
  }
`
