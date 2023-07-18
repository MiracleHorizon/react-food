import dynamic from 'next/dynamic'

import { ProductsSectionHeader } from './ProductsSectionHeader'
import { CutleryPanel } from './CutleryPanel'
import { SectionRoot } from '../CartContent.styled'

// TODO: Loader
const ProductsList = dynamic(
  import('./ProductsList').then(mod => mod.ProductsList),
  { ssr: false }
)

export const ProductsSection = () => (
  <SectionRoot>
    <ProductsSectionHeader />
    <main>
      <CutleryPanel />
      <ProductsList />
    </main>
  </SectionRoot>
)
