import styled from '@emotion/styled'

const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  span,
  p {
    font-size: 17px;
  }

  p {
    span {
      margin-left: 3px;
    }
  }
`

export default Item
