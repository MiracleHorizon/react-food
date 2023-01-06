import ListSvg from '@/ui/svg/ListSvg'
import * as Label from './OrdersLabel.styles'

const OrdersLabel = () => (
  <Label.Root href='/orders'>
    <Label.SvgWrapper>
      <ListSvg />
    </Label.SvgWrapper>
    <Label.Text>Заказы</Label.Text>
  </Label.Root>
)

export default OrdersLabel
