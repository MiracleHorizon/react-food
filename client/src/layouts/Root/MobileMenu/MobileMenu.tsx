import MediaQuery from 'react-responsive'

import MobileFooterMenuItem from './MobileMenuItem'
import { Routes } from '@router/Routes.enum'
import cartSvg from '@public/svg/cart_2.svg'
import listSvg from '@public/svg/list.svg'
import cutlerySvg from '@public/svg/cutlery.svg'
import { breakpoints } from '@styles/responsiveness/breakpoints'
import * as Menu from './MobileMenu.styled'

const menuItems = [
  { title: 'Главная', imagePath: cutlerySvg.src, href: Routes.HOME },
  { title: 'Заказы', imagePath: listSvg.src, href: Routes.ORDERS },
  { title: 'Корзина', imagePath: cartSvg.src, href: Routes.CART }
]

const MobileMenu = () => (
  <MediaQuery maxWidth={breakpoints.tablet}>
    <Menu.Root>
      <Menu.Nav>
        <Menu.List>
          {menuItems.map(item => (
            <MobileFooterMenuItem key={item.href} {...item} />
          ))}
        </Menu.List>
      </Menu.Nav>
    </Menu.Root>
  </MediaQuery>
)

export default MobileMenu
