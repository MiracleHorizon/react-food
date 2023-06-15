import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { applyFirefoxStyles } from '@styles/helpers/applyFirefoxStyles'

export const Root = styled.div<RootProps>`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  border: 2px solid rgba(138, 135, 132, 0.4);
  padding-left: ${p => (p.withLeadIcon ? 0 : 16)}px;
  padding-right: ${p => (p.withClearAction ? 34 : 8)}px;
`

export const Field = styled.input`
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-weight: 500;

  ${applyFirefoxStyles(
    css`
      letter-spacing: -0.03em;
    `
  )};
`

export const LeadIconContainer = styled.div`
  width: 44px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ClearIconSvg = styled.svg`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
  translate: 0 -50%;
  width: 18px;
  height: 18px;
  opacity: 0.3;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 0.5;
  }
`

interface RootProps {
  withLeadIcon: boolean
  withClearAction: boolean
}
