import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import DefaultButton from '@ui/buttons/button'

export const Panel = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  padding: 24px;
  border-radius: 32px;
  background: white;
`

export const Header = styled.header`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 24px;
`

export const Title = styled.h3`
  border-radius: 32px;
  font-size: 24px;
  font-weight: 600;
  background: white;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledButton = styled(DefaultButton)`
  flex: 1 1 auto;

  &:first-of-type {
    margin-right: 6px;
  }

  &:last-of-type {
    margin-left: 6px;
  }
`
