import { css } from '@emotion/react'

import { colors } from './colors'

export const defaultScrollbarStyles = {
  webkitScrollbar: css`
    &::-webkit-scrollbar {
      width: 5px;
    }
  `,
  webkitScrollbarThumb: css`
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.gray['7']};
    }
  `
}
