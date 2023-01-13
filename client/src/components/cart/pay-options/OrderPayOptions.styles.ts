import styled from '@emotion/styled'

import { DefaultRoundedDiv } from '@/public/styles'

export const Root = styled(DefaultRoundedDiv)`
  width: 450px;
  height: max-content;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #21201f;
`

export const Content = styled.main`
  width: 100%;
  margin-bottom: 24px;
`

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
`
