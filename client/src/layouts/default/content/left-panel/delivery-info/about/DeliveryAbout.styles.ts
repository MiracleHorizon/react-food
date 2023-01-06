import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

export const Root = styled.div`
  margin-top: 10px;
`

export const Text = styled.span`
  font-weight: 600;
`

export const Svg = styled.svg`
  position: relative;
  top: 1px;
  width: 18px;
  height: 10px;
  fill: none;
  flex: none;
  margin-left: 4px;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke: ${colors.black1};
`

export const SvgTip = styled.path`
  transition: transform 0.15s ease;
`

export const SvgLine = styled.path`
  opacity: 0;
  transition: opacity 0.15s ease;
`
