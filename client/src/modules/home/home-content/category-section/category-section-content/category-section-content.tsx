import { FC, useRef } from 'react'

import Carousel from '@ui/carousel'
import LoadMoreButton from './load-more-button'
import { ProductCardVariant } from '@components/product-card'
import type { ShowcaseProductModel } from '@entities/product'
import * as Content from './category-section-content.styled'

const ProductCategorySectionContent: FC<Props> = ({ id, products }) => {
  const ref = useRef<HTMLDivElement>(null)
  const itemsPerStep = 4
  const totalSteps = Math.ceil((products.length + 1) / itemsPerStep)

  return (
    <Content.Root ref={ref}>
      <Carousel totalSteps={totalSteps} itemsPerStep={itemsPerStep}>
        <>
          {products.map(product => (
            <Content.ProductCard
              key={product.id}
              variant={ProductCardVariant.SMALL}
              {...product}
            />
          ))}
          <LoadMoreButton categoryId={id} />
        </>
      </Carousel>
    </Content.Root>
  )
}

export default ProductCategorySectionContent

interface Props {
  id: string
  products: ShowcaseProductModel[]
}
