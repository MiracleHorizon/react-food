import type { FC } from 'react'

import { UserAddressWidget } from '@components/user/UserAddressWidget'
import { DeliveryAddressDetailsFormWrapper } from './DeliveryAddressDetailsFormWrapper'
import { useUserStore } from '@stores/userStore'
import * as Section from './DeliverySection.styled'

export const DeliverySection: FC<Props> = props => {
  const isAddressesEmpty = useUserStore(state => state.isAddressesEmpty())

  return (
    <Section.Root>
      <Section.TitleArticle>
        <Section.Title>Условия доставки</Section.Title>
      </Section.TitleArticle>
      <UserAddressWidget />
      {!isAddressesEmpty && (
        <Section.FormContainer>
          <DeliveryAddressDetailsFormWrapper {...props} />
        </Section.FormContainer>
      )}
    </Section.Root>
  )
}

interface Props {
  isOrdering: boolean
  endOrdering: VoidFunction
}
