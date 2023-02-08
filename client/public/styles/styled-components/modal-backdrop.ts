import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const ModalBackdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`

export const MotionModalBackdrop = ModalBackdrop.withComponent(motion.div)
