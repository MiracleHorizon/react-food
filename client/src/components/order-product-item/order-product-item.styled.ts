import styled from '@emotion/styled'
import { colors } from '@/styles/variables'

export const Root = styled.li<RootProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  div[data-ui='change-count-label'] {
    button {
      width: ${p => (p.variant === 'default' ? 40 : 32)}px;
      height: ${p => (p.variant === 'default' ? 40 : 32)}px;
    }

    span {
      margin: 0 ${p => (p.variant === 'default' ? 4 : 2)}px;
    }
  }
`

export const PriceLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
`

export const Price = styled.span`
  font-size: 17px;
  margin-top: 4px;
`

export const ThroughFullPrice = styled.span`
  font-size: 14px;
  text-decoration: line-through;
  color: ${colors.gray['8']};
`

interface RootProps {
  variant: 'default' | 'small'
}
