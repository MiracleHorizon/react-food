import { type FC, memo } from 'react'

import ChevronSvg from '@ui/svg/ChevronSvg'
import { Routes } from '@router/Routes.enum'
import * as Button from './LoadMoreButton.styled'

const LoadMoreButton: FC<Props> = ({ productCategoryId }) => (
  <Button.Root href={`${Routes.CATEGORY}/${productCategoryId}`}>
    <Button.Title>Все</Button.Title>
    <ChevronSvg />
  </Button.Root>
)

export default memo(LoadMoreButton)

interface Props {
  productCategoryId: string
}
