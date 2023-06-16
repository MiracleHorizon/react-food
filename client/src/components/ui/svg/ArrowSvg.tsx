import type { FC } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

const ArrowSvg: FC<EmotionClassNameProps> = props => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m10 7.5 4.5 4.5-4.5 4.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)

export default ArrowSvg
