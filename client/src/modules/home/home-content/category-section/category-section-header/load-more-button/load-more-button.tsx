import type { FC } from 'react'

import ArrowRightSvg from '@/ui/svg/arrow-right-svg'
import { Routes } from '@/types/routes'
import * as Button from './load-more-button.styled'

const LoadMoreButton: FC<Props> = ({ categoryId }) => (
  <Button.Root href={`${Routes.CATEGORY}/${categoryId}`}>
    <Button.Title>Все</Button.Title>
    <ArrowRightSvg />
  </Button.Root>
)

export default LoadMoreButton

interface Props {
  categoryId: string
}
