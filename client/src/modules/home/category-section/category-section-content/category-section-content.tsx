import type { FC } from 'react'

import LoadMoreButton from './load-more-button'
import ProductCard, { ProductCardVariant } from '@/components/product-card'
import type { ProductModel } from '@/entities/product'
import * as Content from './category-section-content.styled'

const ProductCategorySectionContent: FC<Props> = ({ id, products }) => (
  <Content.Root>
    {products.map(product => (
      <ProductCard
        key={product.id}
        variant={ProductCardVariant.SMALL}
        {...product}
      />
    ))}
    <LoadMoreButton categoryId={id} />
  </Content.Root>
)

export default ProductCategorySectionContent

interface Props {
  id: string
  products: ProductModel[]
}
