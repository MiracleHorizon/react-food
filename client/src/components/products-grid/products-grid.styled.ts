import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import BaseProductCard from '@/components/product-card'

export const Root = styled(motion.div)`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  gap: 10px;
`

export const ProductCard = styled(BaseProductCard)`
  min-width: 224px;
  max-width: 300px;
  width: 100%;
`
