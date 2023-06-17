import { Listbox } from '@headlessui/react'
import { type FC, memo } from 'react'

import CheckSvg from '@ui/svg/CheckSvg'
import { getDeliveryAddressString } from '@helpers/getDeliveryAddressString'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'
import * as Option from './UserAddressSelectOption.styled'

const UserAddressSelectOption: FC<Props> = ({ isSelected, ...address }) => (
  <Listbox.Option value={address} as={Option.Root}>
    <Option.Title>{getDeliveryAddressString(address)}</Option.Title>
    {isSelected && <CheckSvg />}
  </Listbox.Option>
)

export default memo(UserAddressSelectOption)

interface Props extends DeliveryAddress {
  isSelected: boolean
}
