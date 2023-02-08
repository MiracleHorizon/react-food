import type { RefObject } from 'react'

export interface ModalProps {
  open: boolean
  onClose: () => void
  initialFocusRef?: RefObject<HTMLElement>
}
