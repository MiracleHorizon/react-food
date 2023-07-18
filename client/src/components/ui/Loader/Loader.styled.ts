import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Root = styled.div<Props>`
  ${p =>
    p.fullScreen
      ? css`
          width: 100vw;
          height: 100vh;
        `
      : css`
          width: 100%;
          height: 100%;
        `};
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  fullScreen?: boolean
}
