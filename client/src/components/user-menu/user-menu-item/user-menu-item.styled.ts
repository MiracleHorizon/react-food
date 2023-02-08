import styled from '@emotion/styled'
import NextLink from 'next/link'
import { motion, Variants } from 'framer-motion'

import { colors } from '@/styles/variables'

export const animation: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 2
    }
  }
}

export const Root = styled(motion.li)`
  cursor: pointer;
  width: 100%;
  height: 46px;
  padding: 0 12px;
  border-radius: 16px;
  background: transparent;
  transition: background 0.1s ease-out;

  &:not(&:last-of-type) {
    margin-bottom: 14px;
  }

  &:hover {
    background: ${colors.gray['4']};
  }

  &:active {
    background: ${colors.gray['6']};
  }
`

export const Caption = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 17px;
`

export const Link = Caption.withComponent(NextLink)
