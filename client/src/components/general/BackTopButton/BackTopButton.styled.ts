import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { darken } from 'polished'

import { ChevronDoubleSvg } from '@ui/svg/ChevronDoubleSvg'
import { MOBILE_MENU_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

export const Root = styled(motion.button)`
  display: none;
  position: fixed;
  right: 5%;
  bottom: ${MOBILE_MENU_HEIGHT + 20}px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${colors.yellow.primary};
  box-shadow: 0 8px 20px rgb(0 0 0 / 7%);
  z-index: 10000;

  &:hover {
    background: ${darken(0.02, colors.yellow.primary)};
  }

  @media screen and (${maxDeviceWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Icon = styled(ChevronDoubleSvg)`
  width: 32px;
  height: 32px;
  margin-top: -2px;
`

export const animation = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1
  },
  exit: {
    scale: 0
  },
  transition: {
    type: 'spring',
    stiffness: 320,
    damping: 30
  }
}
