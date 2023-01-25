import styled from '@emotion/styled'
import NextImage from 'next/image'

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const TitleLabel = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Image = styled(NextImage)`
  margin-right: 12px;
`

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
`
