import { observer } from 'mobx-react-lite'

import { RUBLE_SIGN } from '@/utils/constants'
import Price from './OrderPayTotalPrice'

const OrderPayTotalPrice = () => (
  <Price>
    {/*{OrderStore.totalPrice}*/}
    <span>{RUBLE_SIGN}</span>
  </Price>
)

export default observer(OrderPayTotalPrice)
