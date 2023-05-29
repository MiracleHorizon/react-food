import ListSvg from '@ui/svg/ListSvg'
import { useUserStore } from '@stores/userStore'
import { Routes } from '@router/Routes.enum'
import * as Label from './OrdersLabel.styled'

const OrdersLabel = () => (
  <>
    {useUserStore(state => state.isAuth()) && (
      <Label.Root href={Routes.ORDERS}>
        <Label.IconContainer>
          <ListSvg />
        </Label.IconContainer>
        <Label.Title>Заказы</Label.Title>
      </Label.Root>
    )}
  </>
)

export default OrdersLabel
