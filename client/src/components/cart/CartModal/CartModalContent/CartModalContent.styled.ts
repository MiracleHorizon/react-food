import styled from '@emotion/styled'

import { defaultScrollbarStyles } from '@styles/scrollbar'

export const Root = styled.main`
  padding: 0 36px 4px;
  overflow: auto;

  ${defaultScrollbarStyles.webkitScrollbar};

  ${defaultScrollbarStyles.webkitScrollbarThumb};
`
