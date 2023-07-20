import { type FC, memo } from 'react'
import { useRouter } from 'next/router'

import { Routes } from '@router/Routes.enum'
import type { NavigationCategory } from '@models/NavigationCategory'
import * as Item from './NavigationItem.styled'

export const NavigationItem: FC<NavigationCategory> = memo(
  ({ id, title, imagePath }) => {
    const router = useRouter()

    return (
      <Item.Root>
        <Item.Link href={`${Routes.CATEGORY}/${id}`}>
          {imagePath ? (
            <Item.Picture bgImagePath={imagePath} />
          ) : (
            <Item.PictureFallback />
          )}
          <Item.Content>
            <Item.Title isItemSelected={router.query.slug === id}>
              {title}
            </Item.Title>
          </Item.Content>
        </Item.Link>
      </Item.Root>
    )
  }
)
