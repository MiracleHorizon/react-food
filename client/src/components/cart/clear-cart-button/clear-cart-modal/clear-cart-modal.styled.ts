import styled from '@emotion/styled'

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    flex: 1 1 auto;

    &:first-of-type {
      margin-right: 6px;
    }

    &:last-of-type {
      margin-left: 6px;
    }
  }
`
