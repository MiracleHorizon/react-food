import { Listbox } from '@headlessui/react'
import { type FC, memo } from 'react'

import CheckSvg from '@ui/svg/CheckSvg'
import { getUserAddressString } from '@helpers/getUserAddressString'
import type { UserAddress } from '@models/user/UserAddress'
import * as Option from './UserAddressSelectOption.styled'

const UserAddressSelectOption: FC<Props> = ({ isSelected, ...address }) => (
  <Listbox.Option value={address} as={Option.Root}>
    <Option.Title>{getUserAddressString(address)}</Option.Title>
    {isSelected && <CheckSvg />}
  </Listbox.Option>
)

export default memo(UserAddressSelectOption)

interface Props extends UserAddress {
  isSelected: boolean
}
