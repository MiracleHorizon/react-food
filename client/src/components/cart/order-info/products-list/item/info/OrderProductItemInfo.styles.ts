import styled from '@emotion/styled'

export const Root = styled.div`
  // TODO Доработать адаптивность
  width: 300px;
  display: flex;

  img {
    border-radius: 24px;
    object-fit: cover;
  }
`

export const Container = styled.div`
  max-width: 150px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 25px;
  font-size: 16px;
  line-height: 1.1rem;
`

export const Title = styled.h4`
  margin-bottom: 4px;
  font-weight: 400;
`

export const Weight = styled.span`
  // TODO Уточнить
  color: #959595;
`
