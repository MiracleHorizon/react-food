import type { RefObject } from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: VoidFunction
  initialFocusRef?: RefObject<HTMLElement>
}
