import type { FC } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import percentImage from '@public/images/percent.png'
import * as Badge from './DiscountBadge.styled'

const DiscountBadge: FC<EmotionClassNameProps> = ({ className }) => (
  <Badge.Root className={className}>
    <Badge.Image src={percentImage} width={20} height={20} alt='Скидка' />
  </Badge.Root>
)

export default DiscountBadge
