import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'

export const animation: Variants = {
  hidden: {
    y: 70,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: custom * 0.15
    }
  })
}

export const StyledSection = styled(motion.section)`
  min-height: 400px;
  width: 100%;
  margin-bottom: 20px;
  padding: 15px 0;
`
