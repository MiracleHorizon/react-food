import { useRouter } from 'next/router'

// import OrderStore from '@/stores/Order.store'
import Button from '@/ui/buttons/button'
import OrderPayTotalPrice from './total-price'
import { ButtonVariant } from '@/models/ButtonVariant'
import Footer from './OrderPayOptionsFooter.styles'

const OrderPayOptionsFooter = () => {
  const router = useRouter()

  const handleMakeAnMockOrder = () => {
    // OrderStore.makeAnOrder().then(() => router.push('/'))
  }

  return (
    <Footer>
      <Button
        title='Оплатить'
        variant={ButtonVariant.PRIMARY}
        onClick={handleMakeAnMockOrder}
      />
      <OrderPayTotalPrice />
    </Footer>
  )
}

export default OrderPayOptionsFooter
