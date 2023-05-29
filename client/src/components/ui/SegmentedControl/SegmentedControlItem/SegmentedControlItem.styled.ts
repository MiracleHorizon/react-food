import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.div<Props>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${p => (p.isSelected ? 'white' : 'transparent')};
  ${p => p.isSelected && 'box-shadow: 0px 8px 20px rgb(117 115 111 / 10%)'};
  transition: background 0.1s ease-out, box-shadow 0.1s ease-out;
`

export const Title = styled.span<Props>`
  margin-right: 4px;
  font-size: 17px;
  color: ${p => (p.isSelected ? 'inherit' : colors.gray['8'])};
`

interface Props {
  isSelected: boolean
}
