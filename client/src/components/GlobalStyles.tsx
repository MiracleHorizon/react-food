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
        outline: none;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        cursor: pointer;
      }

      button, input {
        border: none;
        background: none;

        &:focus {
          border: none;
        }
      }

      button {
        font-family: inherit;
      }

      li {
        list-style: none;
      }
    `}
  />
)

export default GlobalStyles
