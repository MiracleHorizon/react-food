import { Portal } from '@components/general/Portal'
import { Loader } from '@ui/Loader'
import { colors } from '@styles/colors'
import { Backdrop } from './ChangeRouteLoader.styled'

export const ChangeRouteLoader = () => (
  <Portal>
    <Backdrop>
      <Loader
        width={65}
        height={65}
        strokeWidth={3.5}
        color={colors.yellow.primary}
        secondaryColor='transparent'
      />
    </Backdrop>
  </Portal>
)
