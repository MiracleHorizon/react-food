import Link from 'next/link'
import { FC, memo } from 'react'
import { useRouter } from 'next/router'

import type { NavigationCategory } from '@/models/NavigationCategory'
import * as Item from './CatalogNavigationItem.styles'

const CatalogNavigationItem: FC<NavigationCategory> = ({
  id,
  title,
  imageUrl
}) => {
  const router = useRouter()

  return (
    <Item.Root>
      <Link href={`/category/${id}`}>
        {imageUrl ? (
          <Item.Image imageUrl={imageUrl} />
        ) : (
          <Item.ImageFallback data-el='nav-img-fallback' />
        )}
        <Item.Content>
          <Item.Title isSelected={router.query.id === id}>{title}</Item.Title>
        </Item.Content>
      </Link>
    </Item.Root>
  )
}

CatalogNavigationItem.displayName = 'CatalogNavigationItem'

export default memo(CatalogNavigationItem)
