import type { FC } from 'react'
import { useRouter } from 'next/router'

import ArrowSvg from '@ui/svg/arrow-svg'
import { Routes } from '@router/routes.enum'
import * as Button from './load-more-button.styled'

const LoadMoreButton: FC<Props> = ({ categoryId }) => {
  const router = useRouter()

  const handleLoadMore = () => router.push(`${Routes.CATEGORY}/${categoryId}`)

  return (
    <Button.Root onClick={handleLoadMore}>
      <Button.Content>
        <Button.Title>посмотреть все</Button.Title>
        <ArrowSvg />
      </Button.Content>
    </Button.Root>
  )
}

export default LoadMoreButton

interface Props {
  categoryId: string
}
