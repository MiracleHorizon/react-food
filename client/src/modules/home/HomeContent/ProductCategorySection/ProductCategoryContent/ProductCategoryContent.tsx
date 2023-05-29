import type { FC } from 'react'

import Carousel from '@ui/Carousel'
import LoadMoreButton from './LoadMoreButton'
import { ShowcaseProductCardVariant } from '@components/ShowcaseProductCard'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import * as Content from './ProductCategoryContent.styled'

const ProductCategoryContent: FC<Props> = ({ id, products }) => {
  const itemsPerStep = 4
  const totalSteps = Math.ceil((products.length + 1) / itemsPerStep)

  return (
    <Content.Root>
      <Carousel totalSteps={totalSteps}>
        <>
          {products.map(product => (
            <Content.ProductCard
              key={product.id}
              variant={ShowcaseProductCardVariant.SMALL}
              {...product}
            />
          ))}
          <LoadMoreButton productCategoryId={id} />
        </>
      </Carousel>
    </Content.Root>
  )
}

export default ProductCategoryContent

interface Props {
  id: string
  products: ShowcaseProductModel[]
}
