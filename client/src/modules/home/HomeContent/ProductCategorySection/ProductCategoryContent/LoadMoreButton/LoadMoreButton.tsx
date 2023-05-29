import { type FC, memo } from 'react'
import { useRouter } from 'next/router'

import ArrowSvg from '@ui/svg/ArrowSvg'
import { Routes } from '@router/Routes.enum'
import * as Button from './LoadMoreButton.styled'

const LoadMoreButton: FC<Props> = ({ productCategoryId }) => {
  const router = useRouter()

  const handleLoadMore = () =>
    router.push(Routes.CATEGORY + '/' + productCategoryId)

  return (
    <Button.Root role='button' onClick={handleLoadMore}>
      <Button.Content>
        <Button.Title>посмотреть все</Button.Title>
        <ArrowSvg />
      </Button.Content>
    </Button.Root>
  )
}

export default memo(LoadMoreButton)

interface Props {
  productCategoryId: string
}
