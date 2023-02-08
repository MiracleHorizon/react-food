import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'

export const panelAnimation: Variants = {
  initial: {
    opacity: 0,
    scale: 0.6,
    y: -75,
    x: 100
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.25
    }
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    y: -126,
    x: 156,
    transition: {
      ease: 'easeIn',
      duration: 0.25
    }
  }
}

export const listAnimation: Variants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.8,
      delayChildren: 0.35,
      staggerChildren: 0.15
    }
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 1
    }
  }
}

export const Root = styled(motion.div)`
  font-family: 'Proxima Nova', sans-serif;
  position: relative;
  z-index: 1000;
`

export const Panel = styled(motion.div)`
  position: fixed;
  right: 12px;
  top: 12px;
  max-height: 450px;
  width: 400px;
  padding: 20px 20px;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
  background: white;
`

export const Title = styled.h3`
  max-width: 100%;
  display: inline-block;
  padding: 0 12px;
  font-size: 26px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const List = styled(motion.ul)`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`
