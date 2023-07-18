import { type FC, memo } from 'react'
import { useRouter } from 'next/router'

import { ChevronSvg } from '@ui/svg/ChevronSvg'
import { Routes } from '@router/Routes.enum'
import * as Button from './LoadMoreButton.styled'

export const LoadMoreButton: FC<Props> = memo(({ productCategoryId }) => {
  const router = useRouter()

  const handleLoadMore = () =>
    router.push(Routes.CATEGORY + '/' + productCategoryId)

  return (
    <Button.Root role='button' onClick={handleLoadMore}>
      <Button.Content>
        <Button.Title>посмотреть все</Button.Title>
        <ChevronSvg />
      </Button.Content>
    </Button.Root>
  )
})

interface Props {
  productCategoryId: string
}
