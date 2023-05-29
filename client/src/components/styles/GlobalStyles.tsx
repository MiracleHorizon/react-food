import { css, Global } from '@emotion/react'

import { HIDDEN_OVERFLOW_CLASSNAME } from '@styles/constants'
import { colors } from '@styles/colors'

const GlobalStyles = () => (
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
    `}
  />
)

export default GlobalStyles
