import { FC, memo } from 'react'

import Button from './change-count-button.styled'

const PLUS_IMAGE_URL =
  'https://yastatic.net/s3/eda-front/www/assets/desktop.light.d25b89416648ce2e90c2.svg'
const MINUS_IMAGE_URL =
  'https://yastatic.net/s3/eda-front/www/assets/desktop.light.f9ee9db6576cc58348c0.svg'

const ChangeCountButton: FC<Props> = ({ destination, onClick, disabled }) => (
  <Button
    disabled={disabled}
    iconUrl={destination === 'increment' ? PLUS_IMAGE_URL : MINUS_IMAGE_URL}
    onClick={onClick}
  />
)

export default memo(ChangeCountButton)

interface Props {
  destination: 'increment' | 'decrement'
  onClick: () => void
  disabled?: boolean
}
