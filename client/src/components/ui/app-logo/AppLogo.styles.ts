import styled from '@emotion/styled'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    margin-right: 8px;
    border-radius: 50%;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`

export const Title = styled.h1`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Slogan = styled.p`
  font-size: 16px;
  color: #7b7b7b;
`
