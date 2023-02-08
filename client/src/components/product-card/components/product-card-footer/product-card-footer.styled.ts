import styled from '@emotion/styled'

import { colors } from '@styles/variables'

const borderRadius = 12

export const Root = styled.footer`
  width: 100%;
  height: 48px;
  margin-top: auto;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: ${colors.gray['2']};
`

export const AddButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
  }
`

export const ChangeCountLabel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ChangeCountButton = styled.button<ChangeCountButtonProps>`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${p =>
    p.position === 'left'
      ? `
    padding-left: 12px;
    justify-content: flex-start;
    border-top-left-radius: ${borderRadius}px;
    border-bottom-left-radius: ${borderRadius}px;
  `
      : `
    padding-right: 12px;
    justify-content: flex-end;
    border-top-right-radius: ${borderRadius}px;
    border-bottom-right-radius: ${borderRadius}px;
  `};

  svg {
    width: 26px;
    height: 26px;
  }
`

export const Count = styled.span`
  font-size: 17px;
  font-weight: 500;
`

interface ChangeCountButtonProps {
  position: 'left' | 'right'
}
