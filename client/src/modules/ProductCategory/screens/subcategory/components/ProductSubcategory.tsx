import { type FC, useMemo } from 'react'

import MainLayout from '@layouts/Main'
import ProductsGrid from '@components/products/ProductsGrid'
import ProductSubcategoryHeader from './ProductSubcategoryHeader'
import { getKeywordsFromProducts } from '@helpers/getKeywordsFromProducts'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import { Root } from './ProductSubcategory.styled'

const ProductSubcategory: FC<ProductSubcategoryModel> = productSubcategory => {
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
        <ProductSubcategoryHeader {...productSubcategory} />
        <ProductsGrid products={productSubcategory.products} />
      </Root>
    </MainLayout>
  )
}

export default ProductSubcategory
