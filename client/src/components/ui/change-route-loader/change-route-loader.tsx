import { Oval } from 'react-loader-spinner'

import Portal from '@ui/portal'
import { ModalWrapper } from '@styles/styled-components/modal-wrapper'
import { StyledLoader } from './change-route-loader.styled'
import { colors } from '@styles/variables'

const ChangeRouteLoader = () => (
  <Portal>
    <ModalWrapper>
      <StyledLoader>
        <Oval
          width={55}
          strokeWidth={3}
          color={colors.yellow['1']}
          secondaryColor='transparent'
        />
      </StyledLoader>
    </ModalWrapper>
  </Portal>
)

export default ChangeRouteLoader
