import type { FC } from 'react'

import ArrowSvg from '@/ui/svg/arrow-svg'
import { Routes } from '@/types/routes'
import * as Button from './load-more-button.styled'

const LoadMoreButton: FC<Props> = ({ categoryId }) => (
  <Button.Root href={`${Routes.CATEGORY}/${categoryId}`}>
    <Button.Title>Все</Button.Title>
    <ArrowSvg />
  </Button.Root>
)

export default LoadMoreButton

interface Props {
  categoryId: string
}
