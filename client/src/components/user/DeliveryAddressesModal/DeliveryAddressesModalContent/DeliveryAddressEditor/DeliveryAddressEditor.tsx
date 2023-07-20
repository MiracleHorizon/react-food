import { type FC, useCallback } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Button, ButtonVariant } from '@ui/Button'
import { DeliveryAddressDetailsForm } from '@components/forms/DeliveryAddressDetailsForm'
import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'
import trashSvg from '@public/svg/trash.svg'
import * as Editor from './DeliveryAddressEditor.styled'

export const DeliveryAddressEditor: FC<Props> = ({
  deliveryAddress,
  deleteDeliveryAddress,
  endEditing
}) => {
  const { formState, getValues, ...otherUseFormParams } =
    useForm<DeliveryAddressDetailsForOrder>({
      defaultValues: {
        office: deliveryAddress.office ?? '',
        doorcode: deliveryAddress.doorcode ?? '',
        entrance: deliveryAddress.entrance ?? '',
        floor: deliveryAddress.floor ?? '',
        commentary: deliveryAddress.commentary ?? ''
      }
    })

  const onSubmitDetailsForm = useCallback(async () => {
    if (!formState.isValid) return

    await getValues()

    endEditing()
  }, [formState.isValid, getValues, endEditing])

  return (
    <section>
      <DeliveryAddressDetailsForm {...otherUseFormParams} />
      <Editor.Actions>
        <Editor.DeleteButton
          leadIcon={
            <Image src={trashSvg.src} width={24} height={24} alt='Delete' />
          }
          variant={ButtonVariant.SECONDARY}
          onClick={deleteDeliveryAddress}
        />
        <Button
          title='Отменить'
          variant={ButtonVariant.SECONDARY}
          onClick={endEditing}
        />
        <Editor.SaveButton
          title='Сохранить'
          variant={ButtonVariant.PRIMARY}
          onClick={onSubmitDetailsForm}
        />
      </Editor.Actions>
    </section>
  )
}

interface Props {
  deliveryAddress: DeliveryAddress
  endEditing: VoidFunction
  deleteDeliveryAddress: VoidFunction
}
