import { TailSpin } from 'react-loader-spinner'

import { Loader } from './OrderProductsListLoader.styles'

// TODO Унифицировать лоадер.
const OrderingProductsListLoader = () => (
  <Loader>
    <TailSpin height='55' width='55' radius='1' color='#d1d1d1' />
  </Loader>
)

export default OrderingProductsListLoader
