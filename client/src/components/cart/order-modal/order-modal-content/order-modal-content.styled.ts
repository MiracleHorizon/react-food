import styled from '@emotion/styled'

import { defaultScrollbarStyles } from '@/styles/scrollbar'

export const Root = styled.main`
  padding: 4px 36px;
  overflow: auto;

  ${defaultScrollbarStyles.webkitScrollbar};

  ${defaultScrollbarStyles.webkitScrollbarThumb};
`
