import { createPortal } from 'react-dom'
import { Oval } from 'react-loader-spinner'

import { ModalWrapper } from '@/public/styles/ModalWrapper'
import { colors } from '@/public/styles/variables'
import * as Loader from './ChangeRouteLoader.styles'

const ChangeRouteLoader = () =>
  createPortal(
    <ModalWrapper>
      <Loader.Root>
        <Oval
          width={55}
          strokeWidth={3}
          color={colors.yellowPrimary}
          secondaryColor='transparent'
        />
      </Loader.Root>
    </ModalWrapper>,
    document.getElementById('__next') as HTMLElement
  )

export default ChangeRouteLoader
