import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div<Props>`
  cursor: pointer;
  max-height: 140px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 32px;
  background: ${p => (p.isSelected ? 'white' : 'rgba(255, 255, 255, 0.7)')};

  &:hover {
    background: white;
  }

  @media (${maxDeviceWidth.tablet}) {
    height: max-content;
    padding: 18px 24px;
  }

  @media (max-width: 500px) {
    padding: 18px 16px;
  }
`

interface Props {
  isSelected: boolean
}
