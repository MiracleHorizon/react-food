import dynamic from 'next/dynamic'

import ProductsSectionHeader from './ProductsSectionHeader'
import CutleryPanel from './CutleryPanel'
import { Root } from './ProductsSection.styled'

// TODO: Loader
const ProductsList = dynamic(import('./ProductsList'), {
  ssr: false
})

const ProductsSection = () => (
  <Root>
    <ProductsSectionHeader />
    <main>
      <CutleryPanel />
      <ProductsList />
    </main>
  </Root>
)

export default ProductsSection
