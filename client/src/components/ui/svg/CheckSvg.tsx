import type { FC } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

const CheckSvg: FC<EmotionClassNameProps> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      d='M7 12s2.5 5 3.5 5 6-10 6-10'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default CheckSvg
