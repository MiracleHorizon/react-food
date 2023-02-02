import { FC, useRef } from 'react'

import Carousel from '@/ui/carousel'
import LoadMoreButton from './load-more-button'
import ProductCard, { ProductCardVariant } from '@/components/product-card'
import type { ShowcaseProductModel } from '@/entities/product'
import * as Content from './category-section-content.styled'

const ProductCategorySectionContent: FC<Props> = ({ id, products }) => {
  // const [itemsPerStep, setItemsPerStep] = useState(4)
  const itemsPerStep = 4
  const totalSteps = Math.ceil((products.length + 1) / itemsPerStep)

  const ref = useRef<HTMLDivElement>(null)

  // useLayoutEffect(() => {
  //   if (!ref.current) return
  //
  //   const mainNode = ref.current.closest('main')
  //   const mainNodeWidth = window.getComputedStyle(mainNode!).width
  //   setItemsPerStep(Math.floor(parseInt(mainNodeWidth) / 180))
  //   setItemsPerStep(4)
  // }, [])

  return (
    <Content.Root ref={ref}>
      <Carousel totalSteps={totalSteps} itemsPerStep={itemsPerStep}>
        <>
          {products.map(product => (
            <ProductCard
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
