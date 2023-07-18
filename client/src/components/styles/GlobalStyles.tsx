import { css, Global } from '@emotion/react'

import {
  HIDDEN_OVERFLOW_CLASSNAME,
  POINTER_EVENTS_NONE_CLASSNAME
} from '@styles/constants'
import { colors } from '@styles/colors'

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        color: ${colors.black.primary};
      }

      body {
        font-family: 'Proxima Nova', sans-serif;
        width: 100vw;
        min-height: 100vh;
        background: ${colors.gray['2']};
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        font-family: inherit;
        cursor: pointer;
      }

      li {
        list-style: none;
      }

      button,
      input {
        border: none;
        background: none;

        &:focus {
          border: none;
        }
      }

      .${HIDDEN_OVERFLOW_CLASSNAME} {
        overflow: hidden;
      }

      .${POINTER_EVENTS_NONE_CLASSNAME} {
        pointer-events: none;
      }
    `}
  />
)
