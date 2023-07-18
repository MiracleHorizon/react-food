import { type FC, memo } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import type { Routes } from '@router/Routes.enum'
import * as Item from './MobileMenuItem.styled'

export const MobileMenuItem: FC<Props> = memo(({ title, imagePath, href }) => {
  const { asPath } = useRouter()

  return (
    <li>
      <Item.Link href={href} selected={asPath === href}>
        <Item.ImageContainer>
          <Image src={imagePath} alt={title} sizes='100%' fill />
        </Item.ImageContainer>
        <Item.Title>{title}</Item.Title>
      </Item.Link>
    </li>
  )
})

interface Props {
  title: string
  imagePath: string
  href: Routes
}
