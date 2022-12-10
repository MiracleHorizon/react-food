import styled from '@emotion/styled'

export const Root = styled.li`
  padding: 0 6px;
`

export const Content = styled.div`
  cursor: pointer;
  width: 217px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 24px;
  background: white;
  transition: background 100ms ease-in;

  &:hover {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.03);
  }
`
