import dynamic from 'next/dynamic'

import ProductsSectionHeader from './ProductsSectionHeader'
import CutleryPanel from './CutleryPanel'
import { SectionRoot } from '../CartContent.styled' // TODO: Loader

// TODO: Loader
const ProductsList = dynamic(import('./ProductsList'), {
  ssr: false
})

const ProductsSection = () => (
  <SectionRoot>
    <ProductsSectionHeader />
    <main>
      <CutleryPanel />
      <ProductsList />
    </main>
  </SectionRoot>
)

export default ProductsSection
