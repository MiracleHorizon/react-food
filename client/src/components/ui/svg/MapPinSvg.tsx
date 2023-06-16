import type { FC } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

const MapPinSvg: FC<EmotionClassNameProps> = props => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3c-3.864 0-7 3.136-7 7a7.005 7.005 0 0 0 6 6.929V23a1 1 0 1 0 2 0v-6.071c3.39-.486 6-3.404 6-6.929 0-3.864-3.136-7-7-7Zm3 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      fill='currentColor'
    />
  </svg>
)

export default MapPinSvg
