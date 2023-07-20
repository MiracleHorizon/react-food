import { type FC, useCallback } from 'react'

import { PencilSvg } from '@ui/svg/PencilSvg'
import { DeliveryAddressEditor } from '../../DeliveryAddressEditor'
import { useUserStore } from '@stores/userStore'
import { useDeliveryAddressEditorStore } from '../../deliveryAddressEditorStore'
import { getDeliveryAddressString } from '@helpers/getDeliveryAddressString'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'
import * as Item from './DeliveryAddressItem.styled'

export const DeliveryAddressItem: FC<DeliveryAddress> = deliveryAddress => {
  const isEditing = useDeliveryAddressEditorStore(state =>
    state.isAddressEditing(deliveryAddress.id)
  )
  const setEditingAddressId = useDeliveryAddressEditorStore(
    state => state.setEditingAddressId
  )
  const resetEditingAddressId = useDeliveryAddressEditorStore(
    state => state.resetEditingAddressId
  )
  const removeDeliveryAddress = useUserStore(state => state.removeAddress)

  const deleteDeliveryAddress = useCallback(() => {
    removeDeliveryAddress(deliveryAddress.id).then(resetEditingAddressId)
  }, [deliveryAddress.id, resetEditingAddressId, removeDeliveryAddress])

  const handleSetEditingAddressId = () =>
    setEditingAddressId(deliveryAddress.id)

  return (
    <Item.Root isEditing={isEditing}>
      {isEditing ? (
        <DeliveryAddressEditor
          deliveryAddress={deliveryAddress}
          deleteDeliveryAddress={deleteDeliveryAddress}
          endEditing={resetEditingAddressId}
        />
      ) : (
        <Item.ClosedContent>
          <span>{getDeliveryAddressString(deliveryAddress)}</span>
          <Item.EditButton onClick={handleSetEditingAddressId}>
            <PencilSvg />
          </Item.EditButton>
        </Item.ClosedContent>
      )}
    </Item.Root>
  )
}
