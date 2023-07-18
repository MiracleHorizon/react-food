import { Oval } from 'react-loader-spinner'

import { Portal } from '@components/general/Portal'
import { colors } from '@styles/colors'
import * as Loader from './ChangeRouteLoader.styled'

export const ChangeRouteLoader = () => (
  <Portal>
    <Loader.Backdrop>
      <Loader.Container>
        <Oval
          width={65}
          height={65}
          strokeWidth={3.5}
          color={colors.yellow.primary}
          secondaryColor='transparent'
        />
      </Loader.Container>
    </Loader.Backdrop>
  </Portal>
)
