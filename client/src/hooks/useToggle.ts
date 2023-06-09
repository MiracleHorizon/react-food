import { useState } from 'react'

export const useToggle = (defaultValue: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultValue)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(prevState => !prevState)

  return { isOpen, open, close, toggle }
}
