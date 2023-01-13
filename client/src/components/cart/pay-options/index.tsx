import CostList from '@/components/cart/pay-options/cost-list'
import OrderPayOptionsFooter from '@/components/cart/pay-options/footer'
import * as Options from './OrderPayOptions.styles'

const OrderPayOptions = () => (
  <Options.Root>
    <Options.Content>
      <Options.Title>Итого</Options.Title>
      <CostList />
    </Options.Content>
    <OrderPayOptionsFooter />
  </Options.Root>
)

export default OrderPayOptions
