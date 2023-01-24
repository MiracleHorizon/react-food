import { FC, memo } from 'react'
import { useRouter } from 'next/router'

import { Routes } from '@/types/Routes'
import type { NavigationCategory } from '@/models/navigation-category'
import * as Item from './navigation-item.styled'

const NavigationItem: FC<NavigationCategory> = ({ id, title, imageUrl }) => {
  const router = useRouter()

  return (
    <Item.Root>
      <Item.Link href={`${Routes.CATEGORY}/${id}`}>
        {imageUrl ? (
          <Item.Image backgroundImage={imageUrl} />
        ) : (
          <Item.ImageFallback data-el='nav-img-fb' />
        )}
        <Item.Content>
          <Item.Title selected={router.query.id === id}>{title}</Item.Title>
        </Item.Content>
      </Item.Link>
    </Item.Root>
  )
}

export default memo(NavigationItem)
