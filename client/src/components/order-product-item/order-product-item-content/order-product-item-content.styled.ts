import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@/styles/variables'

export const Root = styled.div<ContainerProps>`
  position: relative;
  width: ${p => (p.variant === 'default' ? 300 : 240)}px;
  display: flex;

  div[data-el='discount-icon'] {
    position: absolute;
    left: ${p => p.variant === 'small' && -8}px;
    top: ${p => p.variant === 'small' && -8}px;
  }
`

export const Image = styled(NextImage)`
  border-radius: 24px;
  object-fit: cover;
`

export const Container = styled.div<ContainerProps>`
  max-width: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.1rem;

  ${p => {
    const marginLeft = p.variant === 'default' ? 25 : 12
    const titleFontSize = p.variant === 'default' ? 18 : 17

    return `
      margin-left: ${marginLeft}px;
    
      h4 {
        font-size: ${titleFontSize}px;
      }
    `
  }};
`

export const Title = styled.h4`
  margin-bottom: 4px;
  font-weight: 400;
`

export const Weight = styled.span`
  font-size: 17px;
  color: ${colors.gray['8']};
`

interface ContainerProps {
  variant: 'default' | 'small'
}
