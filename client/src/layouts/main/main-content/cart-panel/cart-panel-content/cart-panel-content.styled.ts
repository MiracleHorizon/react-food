import styled from '@emotion/styled'

import { defaultScrollbarStyles } from '@/styles/scrollbar'

// todo Сколлбар в Firefox.
export const Root = styled.main<RootProps>`
  flex: 1 1 auto;
  padding: 0 16px 20px 16px;
  border-radius: 24px 24px 0 0;
  overflow: auto;
  transition: box-shadow 0.2s ease-in-out;
  ${p =>
    !p.isScrollOnTop &&
    `box-shadow: rgb(0 0 0 / 5%) 0 8px 8px -4px inset,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px inset, rgb(0 0 0 / 0%) 0px 0px 0px 0px inset,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px inset`};

  ${defaultScrollbarStyles.webkitScrollbar};

  &::-webkit-scrollbar-track {
    margin-top: 24px;
  }

  ${defaultScrollbarStyles.webkitScrollbarThumb};
`

export const List = styled.ul`
  margin-bottom: 25px;
`

interface RootProps {
  isScrollOnTop: boolean
}
