import Image from 'next/image'
import { useRouter } from 'next/router'

import CartStore from '@/stores/Cart.store'
import Button from './ClearCartButton.styles'

const TRASH_CART_IMAGE_URL =
  'https://yastatic.net/s3/eda-front/www/assets/desktop.trash.e4a122e26252ac568700.svg'

const ClearCartButton = () => {
  const router = useRouter()

  const handleClearCart = () => {
    if (confirm('Очистить корзину?')) {
      CartStore.clear()
      return router.push('/')
    }
  }

  return (
    <Button onClick={handleClearCart}>
      <span>
        <Image
          src={TRASH_CART_IMAGE_URL}
          width={24}
          height={24}
          alt='Clear cart'
        />
        Очистить корзину
      </span>
    </Button>
  )
}

export default ClearCartButton
