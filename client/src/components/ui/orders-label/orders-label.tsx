import ListSvg from '@/ui/svg/ListSvg'
import { Routes } from '@/types/Routes'
import * as Label from './orders-label.styled'

const OrdersLabel = () => (
  <Label.Root href={Routes.ORDERS}>
    <Label.SvgWrapper>
      <ListSvg />
    </Label.SvgWrapper>
    <Label.Text>Заказы</Label.Text>
  </Label.Root>
)

export default OrdersLabel
