import styled from '@emotion/styled'

import { colors } from '@/styles/variables'

// TODO: Переработать стили.
export const Root = styled.button<RootProps>`
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-radius: 16px;
  color: ${colors.black['1']};
  ${p => {
    const disableColor = p.transparentDisableColor
      ? colors.gray['2']
      : colors.yellow['1']
    const bgColor = p.disabled ? disableColor : colors.yellow['1']

    return `
      background: ${bgColor};
      ${p.disabled && 'opacity: 0.6'};
      ${p.disabled && 'pointer-events: none'};
    `
  }};
`

export const Title = styled.span`
  margin-right: 16px;
  text-align: left;
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
`

export const Cost = styled.span`
  font-size: 19px;
  font-weight: 600;
`

interface RootProps {
  disabled: boolean
  transparentDisableColor?: boolean
}