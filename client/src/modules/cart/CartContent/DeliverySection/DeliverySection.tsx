import type { FC } from 'react'

import UserAddressWidget from '@components/user/UserAddressWidget'
import DeliveryAddressDetailsForm from './DeliveryAddressForm'
import { useUserStore } from '@stores/userStore'
import * as Section from './DeliverySection.styled'

const DeliverySection: FC<Props> = props => {
  const isAddressesEmpty = useUserStore(state => state.isAddressesEmpty())

  return (
    <Section.Root>
      <Section.TitleArticle>
        <Section.Title>Условия доставки</Section.Title>
      </Section.TitleArticle>
      <UserAddressWidget />
      {!isAddressesEmpty && (
        <Section.FormContainer>
          <DeliveryAddressDetailsForm {...props} />
        </Section.FormContainer>
      )}
    </Section.Root>
  )
}

export default DeliverySection

interface Props {
  isOrdering: boolean
  endOrdering: VoidFunction
}
