import { Listbox } from '@headlessui/react'
import { type FC, memo } from 'react'

import { CheckSvg } from '@ui/svg/CheckSvg'
import { getDeliveryAddressString } from '@helpers/getDeliveryAddressString'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'
import * as Option from './UserAddressSelectOption.styled'

export const UserAddressSelectOption: FC<Props> = memo(
  ({ isSelected, ...address }) => (
    <Listbox.Option value={address} as={Option.Root}>
      <Option.Title>{getDeliveryAddressString(address)}</Option.Title>
      {isSelected && <CheckSvg />}
    </Listbox.Option>
  )
)

interface Props extends DeliveryAddress {
  isSelected: boolean
}
