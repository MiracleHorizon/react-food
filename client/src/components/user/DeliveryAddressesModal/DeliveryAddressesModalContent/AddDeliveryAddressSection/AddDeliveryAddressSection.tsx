import { AddDeliveryAddress } from './AddDeliveryAddress'
import { AddDeliveryAddressButton } from './AddDeliveryAddressButton'
import { useToggle } from '@hooks/useToggle'
import { useDeliveryAddressEditorStore } from '../deliveryAddressEditorStore'

export const AddDeliveryAddressSection = () => {
  const isAnyAddressEditing = useDeliveryAddressEditorStore(state =>
    state.isAnyAddressEditing()
  )
  const resetEditingAddressId = useDeliveryAddressEditorStore(
    state => state.resetEditingAddressId
  )

  const {
    isOpen: isAdding,
    open: startAdding,
    close: endAdding
  } = useToggle(false)

  const handleAddDeliveryAddressButtonClick = () => {
    startAdding()
    resetEditingAddressId()
  }

  return (
    <div>
      {isAdding && !isAnyAddressEditing && (
        <AddDeliveryAddress endAdding={endAdding} />
      )}
      {!isAdding && (
        <AddDeliveryAddressButton
          onClick={handleAddDeliveryAddressButtonClick}
        />
      )}
    </div>
  )
}
