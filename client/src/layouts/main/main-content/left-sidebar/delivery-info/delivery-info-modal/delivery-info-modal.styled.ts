import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'

export const animation: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.2
    }
  }
}

export const Panel = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  padding: 24px 24px 32px 24px;
  border-radius: 24px;
  background: white;
`

export const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
`
