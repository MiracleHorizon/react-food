import type { FC, ReactNode } from 'react'

import type { ButtonVariant } from './button-variant'
import * as StyledButton from './button.styled'

const Button: FC<Props> = ({ text, icon, ...otherData }) => (
  <StyledButton.Root {...otherData}>
    {icon && icon}
    <StyledButton.Text withIcon={Boolean(icon)}>{text}</StyledButton.Text>
  </StyledButton.Root>
)

export default Button

interface Props {
  text: string
  variant: ButtonVariant
  onClick: () => void
  icon?: ReactNode
  className?: string
}
