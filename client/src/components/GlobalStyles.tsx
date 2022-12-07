import { css, Global } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        min-width: 100vw;
        min-height: 100vh;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        cursor: pointer;
        border: none;
        background: none;

        &:focus {
          border: none;
        }
      }

      li {
        list-style: none;
      }
    `}
  />
)

export default GlobalStyles
