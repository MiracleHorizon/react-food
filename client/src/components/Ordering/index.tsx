import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import CartStore from '@/stores/Cart.store'
import Loader from '@/components/Ordering/Loader'
import CutleryPanel from '@/components/Ordering/CutleryPanel'
import ProductsList from '@/components/Ordering/OrderingProductsList'
import OrderingHeader from '@/components/Ordering/Header'
import * as Styled from './Ordering.styles'

const Ordering = observer(() => {
  const router = useRouter()

  if (CartStore.isCartDataLoading) {
    return <Loader />
  }

  if (CartStore.isEmpty) {
    router.back()
  }

  return (
    <Styled.Root>
      <OrderingHeader />
      <CutleryPanel />
      <ProductsList />
    </Styled.Root>
  )
})

export default Ordering
