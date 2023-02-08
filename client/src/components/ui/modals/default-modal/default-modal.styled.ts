import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Root = styled(motion.div)`
  font-family: 'Proxima Nova', sans-serif;
  position: relative;
  z-index: 1000;
`

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
