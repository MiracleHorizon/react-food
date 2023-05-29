import { type FC, memo } from 'react'
import { useRouter } from 'next/router'

import type { Routes } from '@router/Routes.enum'
import * as Item from './MobileFooterMenuItem.styled'

const MobileFooterMenuItem: FC<Props> = ({ title, imagePath, href }) => {
  const router = useRouter()
  const isSelected = router.asPath === href

  return (
    <li>
      <Item.Link href={href} selected={isSelected}>
        <Item.Image src={imagePath} alt={title} width={34} height={34} />
        <Item.Title>{title}</Item.Title>
      </Item.Link>
    </li>
  )
}

export default memo(MobileFooterMenuItem)

interface Props {
  title: string
  imagePath: string
  href: Routes
}
