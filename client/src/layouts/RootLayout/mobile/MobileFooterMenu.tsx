import MobileFooterMenuItem from './MobileFooterMenuItem'
import { Routes } from '@router/Routes.enum'
import cartSvg from '@public/svg/cart_2.svg'
import cutlerySvg from '@public/svg/cutlery.svg'
import * as Menu from './MobileFooterMenu.styled'

const menuItems = [
  { title: 'Главная', imagePath: cutlerySvg.src, href: Routes.HOME },
  { title: 'Заказы', imagePath: cartSvg.src, href: Routes.ORDERS },
  { title: 'Корзина', imagePath: cartSvg.src, href: Routes.CART }
]

const MobileFooterMenu = () => (
  <Menu.Root>
    <Menu.Nav>
      <Menu.List>
        {menuItems.map(item => (
          <MobileFooterMenuItem key={item.href} {...item} />
        ))}
      </Menu.List>
    </Menu.Nav>
  </Menu.Root>
)

export default MobileFooterMenu
