import { type FC, memo } from 'react'

import ArrowSvg from '@ui/svg/ArrowSvg'
import { Routes } from '@router/Routes.enum'
import * as Button from './LoadMoreButton.styled'

const LoadMoreButton: FC<Props> = ({ productCategoryId }) => (
  <Button.Root href={`${Routes.CATEGORY}/${productCategoryId}`}>
    <Button.Title>Все</Button.Title>
    <ArrowSvg />
  </Button.Root>
)

export default memo(LoadMoreButton)

interface Props {
  productCategoryId: string
}
