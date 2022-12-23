import type { FC, ReactNode } from 'react'

import { ButtonVariant } from '@/models/ButtonVariant'
import StyledButton from './Button.styles'

const Button: FC<Props> = ({ title, icon, variant, onClick }) => (
  <StyledButton variant={variant} onClick={onClick}>
    {icon && icon}
    <span>{title}</span>
  </StyledButton>
)

export default Button

interface Props {
  title: string
  icon?: ReactNode
  variant: ButtonVariant
  onClick: () => void
}
