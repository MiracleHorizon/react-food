import { type FC, memo } from 'react'

import { PRODUCT_IMAGE_FALLBACK } from '@constants/images'
import type { OrderProductModel } from '@modules/Orders/models/OrderProduct'
import * as Footer from './OrderCardFooter.styled'

export const OrderCardFooter: FC<Props> = memo(({ products }) => (
  <Footer.Root>
    {products.slice(0, 5).map(product => (
      <Footer.Product key={product.id}>
        <Footer.ProductImage
          width={32}
          height={32}
          src={product.imagePath ?? PRODUCT_IMAGE_FALLBACK}
          alt={product.title}
        />
      </Footer.Product>
    ))}
    {products.length > 5 && (
      <Footer.ProductsRest>
        <span>{products.length - 5}</span>
      </Footer.ProductsRest>
    )}
  </Footer.Root>
))

interface Props {
  products: OrderProductModel[]
}
