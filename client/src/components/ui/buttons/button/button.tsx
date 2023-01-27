import type { FC, ReactNode } from 'react'

import type { ButtonVariant } from './button-variant'
import * as StyledButton from './button.styled'

const Button: FC<Props> = ({ text, icon, variant, onClick }) => (
  <StyledButton.Root variant={variant} onClick={onClick}>
    {icon && icon}
    <StyledButton.Text>{text}</StyledButton.Text>
  </StyledButton.Root>
)

export default Button

interface Props {
  text: string
  variant: ButtonVariant
  onClick: () => void
  icon?: ReactNode
}
