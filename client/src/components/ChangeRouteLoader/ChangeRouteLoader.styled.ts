import styled from '@emotion/styled'

import { ModalBackdrop } from '@styles/styled-components/ModalBackdrop'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Backdrop = styled(ModalBackdrop)`
  z-index: 10000;
`
