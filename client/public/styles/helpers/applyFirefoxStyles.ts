import { css, type SerializedStyles } from '@emotion/react'

export const applyFirefoxStyles = (
  styles: SerializedStyles
): SerializedStyles => {
  return css`
    @-moz-document url-prefix() {
      ${styles};
    }
  `
}
