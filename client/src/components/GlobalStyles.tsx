import { css, Global } from '@emotion/react'

import { HIDDEN_OVERFLOW_CLASSNAME } from '@/utils/constants/styles'

const GlobalStyles = () => (
  <Global
    styles={css`
      .${HIDDEN_OVERFLOW_CLASSNAME} {
        overflow: hidden;
      }

      html,
      body {
        min-width: 100vw;
        min-height: 100vh;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
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
    `}
  />
)

export default GlobalStyles
