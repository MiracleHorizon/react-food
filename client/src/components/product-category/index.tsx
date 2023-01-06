import { observer } from 'mobx-react-lite'

import DefaultLayout from '@/layouts/default'
import ProductCategoryStore from '@/stores/ProductCategory.store'

const ProductCategory = observer(() => {
  return (
    <DefaultLayout>
      <h1>{ProductCategoryStore.title}</h1>
    </DefaultLayout>
  )
})

export default ProductCategory
