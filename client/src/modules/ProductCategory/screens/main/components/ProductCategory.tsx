import { type FC, useMemo } from 'react'

import { MainLayout } from '@layouts/Main'
import { ProductCategoryHeader } from './ProductCategoryHeader'
import { ProductCategoryShowcase } from './ProductCategoryShowcase'
import { getKeywordsFromProducts } from '@helpers/getKeywordsFromProducts'
import { getProductCategoryProducts } from '../helpers/getProductCategoryProducts'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'
import { Root } from './ProductCategory.styled'

export const ProductCategory: FC<ProductCategoryModel> = productCategory => {
  const keywords = useMemo(() => {
    const products = getProductCategoryProducts(productCategory)
    return getKeywordsFromProducts(products)
  }, [productCategory])

  return (
    <MainLayout
      title={productCategory.title}
      description={productCategory.description}
      keywords={keywords}
      withSidePanels
    >
      <Root>
        <ProductCategoryHeader {...productCategory} />
        <ProductCategoryShowcase {...productCategory} />
      </Root>
    </MainLayout>
  )
}
