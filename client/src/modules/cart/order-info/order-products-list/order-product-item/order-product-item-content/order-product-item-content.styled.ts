import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@/styles/variables'

export const Root = styled.div`
  width: 300px;
  display: flex;
`

export const Image = styled(NextImage)`
  border-radius: 24px;
  object-fit: cover;
`

export const Container = styled.div`
  max-width: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
  color: ${colors.gray['8']};
`
