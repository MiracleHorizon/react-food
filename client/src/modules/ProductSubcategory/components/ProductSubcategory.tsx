import { type FC, useMemo } from 'react'

import MainLayout from '@layouts/Main'
import ProductsGrid from '@components/ProductsGrid'
import ProductSubcategoryHeader from './ProductSubcategoryHeader'
import { getKeywordsFromProducts } from '@helpers/getKeywordsFromProducts'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import { Root } from './ProductSubcategory.styled'

const ProductSubcategory: FC<Props> = ({
  productSubcategory,
  categoryTitle
}) => {
  const keywords = useMemo(() => {
    return getKeywordsFromProducts(productSubcategory.products)
  }, [productSubcategory.products])

  return (
    <MainLayout
      title={productSubcategory.title}
      description={productSubcategory.description}
      keywords={keywords}
      withSidePanels
    >
      <Root>
        <ProductSubcategoryHeader
          {...productSubcategory}
          categoryTitle={categoryTitle}
        />
        <ProductsGrid products={productSubcategory.products} />
      </Root>
    </MainLayout>
  )
}

export default ProductSubcategory

interface Props {
  productSubcategory: ProductSubcategoryModel
  categoryTitle: string
}
