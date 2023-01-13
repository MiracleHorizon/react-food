import { observer } from 'mobx-react-lite'

import DefaultLayout from '@/layouts/default'
import ProductCategoryStore from '@/stores/ProductCategory.store'

const ProductCategory = (() => {
  return (
    <DefaultLayout title={ProductCategoryStore.title}>
      <main style={{ flex: '1 1 auto' }}>
        <h1>{ProductCategoryStore.title}</h1>
      </main>
    </DefaultLayout>
  )
})

export default observer(ProductCategory)
