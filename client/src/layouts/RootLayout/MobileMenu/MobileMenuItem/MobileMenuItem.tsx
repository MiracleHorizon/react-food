import { type FC, memo } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import type { Routes } from '@router/Routes.enum'
import * as Item from './MobileMenuItem.styled'

const MobileMenuItem: FC<Props> = ({ title, imagePath, href }) => {
  const router = useRouter()
  const isSelected = router.asPath === href

  return (
    <li>
      <Item.Link href={href} selected={isSelected}>
        <Item.ImageContainer>
          <Image src={imagePath} alt={title} sizes='100%' fill />
        </Item.ImageContainer>
        <Item.Title>{title}</Item.Title>
      </Item.Link>
    </li>
  )
}

export default memo(MobileMenuItem)

interface Props {
  title: string
  imagePath: string
  href: Routes
}
