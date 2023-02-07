import { observer } from 'mobx-react-lite'

import ListSvg from '@/ui/svg/list-svg'
import { Routes } from '@/types/routes'
import { useUserStore } from '@/stores/user.store'
import * as Label from './orders-label.styled'

const OrdersLabel = () => (
  <>
    {useUserStore.isAuth && (
      <Label.LinkRoot href={Routes.ORDERS}>
        <Label.SvgWrapper>
          <ListSvg />
        </Label.SvgWrapper>
        <Label.Text>Заказы</Label.Text>
      </Label.LinkRoot>
    )}
  </>
)

export default observer(OrdersLabel)
