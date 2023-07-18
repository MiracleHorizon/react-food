import { type FC, memo } from 'react'

import { ChevronSvg } from '@ui/svg/ChevronSvg'
import { Routes } from '@router/Routes.enum'
import * as Button from './LoadMoreButton.styled'

export const LoadMoreButton: FC<Props> = memo(({ productCategoryId }) => (
  <Button.Root href={`${Routes.CATEGORY}/${productCategoryId}`}>
    <Button.Title>Все</Button.Title>
    <ChevronSvg />
  </Button.Root>
))

interface Props {
  productCategoryId: string
}
