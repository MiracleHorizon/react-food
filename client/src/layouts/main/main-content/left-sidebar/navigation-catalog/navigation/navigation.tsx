import { motion } from 'framer-motion'
import type { FC } from 'react'

import NavigationItem from './navigation-item'
import type { NavigationCategory } from '@/models/navigation-category'

const Navigation: FC<Props> = ({ categories }) => (
  <nav>
    <motion.ul initial='hidden' whileInView='visible' viewport={{ once: true }}>
      {categories.map((category, index) => (
        <NavigationItem key={category.id} {...category} index={index} />
      ))}
    </motion.ul>
  </nav>
)

export default Navigation

interface Props {
  categories: NavigationCategory[]
}
