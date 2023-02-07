import styled from '@emotion/styled'

export const Root = styled.div<RootProps>`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${p => (p.withIcon ? 0 : 16)}px;
  padding-right: ${p => (p.withClear ? 36 : 8)}px;
  border-radius: 16px;
  border: 2px solid rgba(138, 135, 132, 0.4);
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
`

export const IconContainer = styled.div`
  width: 44px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ClearSvg = styled.svg`
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
  withIcon?: boolean
  withClear?: boolean
}
