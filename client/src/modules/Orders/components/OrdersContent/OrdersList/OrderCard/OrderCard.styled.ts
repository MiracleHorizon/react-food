import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Content = styled.div<Props>`
  cursor: pointer;
  max-height: 140px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 32px;
  background: ${p => (p.isSelected ? 'white' : 'rgba(255, 255, 255, 0.7)')};
  ${p => p.isSelected && 'box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.07)'};

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
